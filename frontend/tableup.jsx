import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util.js';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = configureStore(); //just for testing!

  ReactDOM.render(<Root store={store} />, root);
});
