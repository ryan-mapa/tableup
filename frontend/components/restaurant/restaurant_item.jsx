import React from 'react';

const RestaurantItem = ({restaurant}) => (
  <div>
    {restaurant.name}
    <br />
    {restaurant.city}
    <br />
    {restaurant.description}
    <br />
    <br />
  </div>
);

export default RestaurantItem;
