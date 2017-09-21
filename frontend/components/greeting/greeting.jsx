import React from 'react';
import {Link} from 'react-router-dom';
import SignupModalContainer from '../signup_modal/signup_modal_container';
import SigninModalContainer from '../signin_modal/signin_modal_container';

const sessionLinks = () => (
  <nav className="login-signup">
    <SignupModalContainer />
    &nbsp;or&nbsp;
    <SigninModalContainer />
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<span className="header-group">
    <h2 className="header-name">Yo, {currentUser.name}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</span>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
