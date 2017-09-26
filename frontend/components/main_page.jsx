import React from 'react';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantSearchContainer from './search/restaurant_search_form_container';

const MainPage = () => (
  <div className='main-container' >
    <div className='main-img'>
      <RestaurantSearchContainer />
    </div>
    <RestaurantIndexContainer />
  </div>
);

export default MainPage;
