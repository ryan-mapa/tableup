import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      let newstate = Object.assign({}, state);
      newstate[action.restaurant.id] = action.restaurant;
      return newstate;
    default:
      return state;
  }
};

export default RestaurantReducer;
