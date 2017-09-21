import React from 'react';
import {Link} from 'react-router-dom';
import SignupModalContainer from '../signup_modal/signup_modal_container';
import SigninModalContainer from '../signin_modal/signin_modal_container';

const sessionLinks = () => (
  <div className='header'>
    <span className="nav-bar">
      <Link to="/" className="header-link">
        <h1>TableUp</h1>
      </Link>
      <img src='app/assets/images/tableup_logo1.png'></img>
      <span className='modal-buttons'>
        <SignupModalContainer />
        <SigninModalContainer />
      </span>
    </span>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<span className="header-group">
    <Link to="/" className="header-link">
      <h1>TableUp</h1>
    </Link>
    <h2 className="header-name">Yo, {currentUser.name}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</span>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
