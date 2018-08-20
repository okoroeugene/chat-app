import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'http://localhost:3000/socket.io.js';

import { Provider } from 'react-redux';
import MainRoute from './routeConfig';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index';

ReactDOM.render(<MainRoute />, document.getElementById('root'));
registerServiceWorker();
