import { combineReducers } from 'redux';
import RestaurantReducer from './restaurant_reducer';
import ReservationReducer from './reservation_reducer';

const entitiesReducer = combineReducers({
  restaurants: RestaurantReducer,
  reservations: ReservationReducer
});

export default entitiesReducer;
