import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('title'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
