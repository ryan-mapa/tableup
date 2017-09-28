import { combineReducers } from 'redux';
import RestaurantReducer from './restaurant_reducer';
import ReservationReducer from './reservation_reducer';
import UsersReducer from './users_reducer';
import ReviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  restaurants: RestaurantReducer,
  reservations: ReservationReducer,
  users: UsersReducer,
  reviews: ReviewsReducer
});

export default entitiesReducer;
