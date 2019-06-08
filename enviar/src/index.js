import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import './assets/css/theme.scss';
import './assets/css/classes.scss';
import './assets/css/main.scss';
import './assets/css/ReactToastify.css';
import './assets/css/support.scss';
import './assets/css/chat.scss';
import './assets/css/chatStyle.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
