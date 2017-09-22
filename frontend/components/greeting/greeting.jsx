import React from 'react';
import {Link} from 'react-router-dom';
import SignupModalContainer from '../signup_modal/signup_modal_container';
import SigninModalContainer from '../signin_modal/signin_modal_container';

const sessionLinks = () => (
  <div className='header'>
    <span className="nav-bar">
      <Link to="/" className="main-logo"></Link>
      <span className='modal-buttons'>
        <SignupModalContainer />
        <SigninModalContainer />
      </span>
    </span>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<span className="nav-bar">
    <Link to="/" className="main-logo"></Link>
    <span className="greeting-message">
      <h2>Hi, {currentUser.name}</h2>
      <button className="header-button" onClick={logout}>Sign Out</button>
    </span>
	</span>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
