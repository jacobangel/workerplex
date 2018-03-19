import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './client/reducers';
import { fetchState, fetchStateSuccess } from './client/actions';
import worker from './bridge/index.worker.js';
import { BRIDGE_STATE_UPDATE } from './bridge/actions';


function connectWorker(worker, mapState, fetchAction) {
  const bridge = worker();
  return function (store) {
    bridge.getState().then((startingState) => {
      store.dispatch(fetchAction(mapState(startingState)));
    })

    bridge.onmessage = e => {
      switch (e.data.type) {
        case BRIDGE_STATE_UPDATE:
          store.dispatch(fetchAction(mapState(e.data.data)));
          break;
      }
    };

    return bridge;
  }
}
let clientStore = createStore(reducers);

const mapWorkerStateToClientState = (state) => {
  return {
    images: state.gallery
  }
};

const bridge = connectWorker(
  worker,
  mapWorkerStateToClientState,
  fetchStateSuccess,
)(clientStore);

ReactDOM.render((
  <Provider store={clientStore} workerDispatch={bridge.dispatch}>
    <App onConnect={() => {
      return bridge.fetchState();
    }} />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
