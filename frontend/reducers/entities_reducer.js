import { combineReducers } from 'redux';
import RestaurantReducer from './restaurant_reducer';
import ReservationReducer from './reservation_reducer';
import UsersReducer from './users_reducer';


const entitiesReducer = combineReducers({
  restaurants: RestaurantReducer,
  reservations: ReservationReducer,
  users: UsersReducer
});

export default entitiesReducer;
