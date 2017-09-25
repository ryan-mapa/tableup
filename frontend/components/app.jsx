import React from 'react';
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import SignupModalContainer from './signup_modal/signup_modal_container';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantSearchContainer from './search/restaurant_search_form_container';
import Favicon from 'react-favicon';

const App = () => (
  <div className='app-container'>

    <div>
      <Favicon url="http://res.cloudinary.com/djyzqmji3/image/upload/v1506322195/TableUp_favicon_1x_a5qbbc.png" />
    </div>

    <GreetingContainer />

    <div className='main-container' >
      <div className='main-img'>
        <RestaurantSearchContainer />
      </div>

      <RestaurantIndexContainer />
    </div>
  </div>
);

export default App;
