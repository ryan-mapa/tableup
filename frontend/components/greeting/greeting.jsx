import React from 'react';
import {Link} from 'react-router-dom';
import SignupModalContainer from '../signup_modal/signup_modal_container';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <SignupModalContainer />
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<span className="header-group">
    <h2 className="header-name">Yo, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</span>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
