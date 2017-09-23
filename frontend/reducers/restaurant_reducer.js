import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_RESTAURANTS:
      let newstate = merge({}, state, action.restaurants);
      return newstate;
    case RECEIVE_RESTAURANT:
      let addstate = state;
      addstate[action.restaurant.id] = action.restaurant;
      return addstate;
    default:
      return state;
  }
};

export default RestaurantReducer;
