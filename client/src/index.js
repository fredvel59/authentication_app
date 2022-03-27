import React from 'react';
import ReactDOM from 'react-dom';
// components
import App from './App';
// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store} >
   <App />    
  </Provider>,
  document.getElementById('root')
);

