import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import SignupModalContainer from './signup_modal/signup_modal_container';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantSearchContainer from './search/restaurant_search_form_container';
import Favicon from 'react-favicon';
import RestaurantDetailContainer from './restaurant/restaurant_detail_container';
import MainPage from './main_page';
import UserProfileContainer from './user/user_profile_container';

const App = () => (
  <div className='app-container'>
    <div>
      <Favicon url="https://res.cloudinary.com/djyzqmji3/image/upload/v1506322195/TableUp_favicon_1x_a5qbbc.png" />
    </div>
    <GreetingContainer />
    <Switch>
      <Route exact path='/' component={MainPage}></Route>
      <Route path='/user/:userId' component={UserProfileContainer}></Route>
      <Route path='/restaurants/:restaurantId' component={RestaurantDetailContainer}></Route>
    </Switch>

  </div>
);

export default App;
