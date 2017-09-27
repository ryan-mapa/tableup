import { combineReducers } from 'redux';
import RestaurantReducer from './restaurant_reducer';
import ReservationReducer from './reservation_reducer';
import UserReducer from './user_reducer';


const entitiesReducer = combineReducers({
  restaurants: RestaurantReducer,
  reservations: ReservationReducer,
  user: UserReducer
});

export default entitiesReducer;
