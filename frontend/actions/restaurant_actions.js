import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

export const receiveRestaurants = restaurant => ({
  type: RECEIVE_RESTAURANTS,
  restaurant
});

export const receiveRestaurant = restaurants => ({
  type: RECEIVE_RESTAURANT,
  restaurants
});

export const fetchRestaurants = () => dispatch => (
  APIUtil.fetchRestaurants()
      .then((restaurants) => receiveRestaurants(restaurants))
);

export const fetchRestaurant = () => dispatch => (
  APIUtil.fetchRestaurant()
      .then((restaurant) => receiveRestaurants(restaurant))
);
