import { combineReducers } from 'redux';
import RestaurantReducer from './restaurant_reducer';

const entitiesReducer = combineReducers({
  restaurants: RestaurantReducer
});

export default entitiesReducer;
