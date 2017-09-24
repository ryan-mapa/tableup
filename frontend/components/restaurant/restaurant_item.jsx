import React from 'react';

const RestaurantItem = ({restaurant}) => (
  <div>
    {restaurant.name}
    <br /><span>City: </span>{restaurant.city}
    <br /><span>Cuisine: </span>{restaurant.cuisine}
    <br /><span>Rating: </span>{restaurant.rating}
    <br /><span>Price: </span>{restaurant.price}
    <br /><span>Description: </span>{restaurant.description}
    <br />
    <br />
  </div>
);

export default RestaurantItem;
