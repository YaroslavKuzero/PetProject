import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import backgroundChange from './js/backgroundChange'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

backgroundChange();