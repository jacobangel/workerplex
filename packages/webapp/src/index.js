import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './client/reducers';
import { fetchState, fetchStateSuccess } from './client/actions';

import worker from './bridge/index.worker.js';
const bridge = worker();

let clientStore = createStore(reducers);

bridge.getState().then((startingState) => {
  clientStore.dispatch(fetchStateSuccess(startingState));
})

bridge.onmessage = e => {
  console.log('got one pack', e);
  if (e.data.type === 'STATE_UPDATE' ){
    clientStore.dispatch(fetchStateSuccess({ images: [ ...e.data.data ] } ));
  }
};

ReactDOM.render((
  <Provider store={clientStore}>
    <App onConnect={() => {
      bridge.fetchState().then((images) => {
        console.log(images);
        clientStore.dispatch(fetchStateSuccess({ images }))
      });
    }} />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
