import React from 'react';
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import SignupModalContainer from './signup_modal/signup_modal_container';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';

const App = () => (
  <div className='app-container'>
    <GreetingContainer />
    <RestaurantIndexContainer />


  </div>
);

export default App;
