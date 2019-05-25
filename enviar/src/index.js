import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import './assets/css/theme.scss';
import './assets/css/main.css';
import './assets/css/classes.css';
import './assets/css/ReactToastify.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
