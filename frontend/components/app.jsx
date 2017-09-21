import React from 'react';
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import SignupModalContainer from './signup_modal/signup_modal_container';


const App = () => (
  <div>
    <Link to="/" className="header-link">
        <h1>TableUp</h1>
    </Link>
    <GreetingContainer />

    <Route path="/signup" component={SignupModalContainer} />
  </div>
);

export default App;
