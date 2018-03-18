import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import worker from './bridge/index.worker.js';
const bridge = worker();

ReactDOM.render(<App bridge={bridge} />, document.getElementById('root'));
registerServiceWorker();
