import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util.js';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = configureStore(); //just for testing!

  ReactDOM.render(<Root store={store} />, root);
});
