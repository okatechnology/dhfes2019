import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};

registerServiceWorker();
render();
