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

let store = createStore(reducers);

bridge.getState().then((startingState) => {
  store.dispatch(fetchState(startingState));
})

ReactDOM.render((
  <Provider store={store}>
    <App onConnect={() => {
      bridge.fetchState().then((images) => {
        console.log(images);
        store.dispatch(fetchStateSuccess({ images }))
      });
    }} />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
