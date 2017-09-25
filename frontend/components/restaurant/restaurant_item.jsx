import React from 'react';

const RestaurantItem = ({restaurant}) => (
  <div className='restaurant-index-item'>
    <span>
      <img src={restaurant.profile_image}></img>
    </span>
    <span className='restaurant-info'>
      <h2>{restaurant.name}</h2>
      <br /><span>City: </span>{restaurant.city}
      <br /><span>Cuisine: </span>{restaurant.cuisine}
      <br /><span>Rating: </span>{restaurant.rating}
      <br /><span>Avg. Price: $</span>{restaurant.price}
      <br /><span>Description: </span>{restaurant.description}
      <br /><span>profile_image url: </span>{restaurant.profile_image}
    </span>
    <br />
    <br />
  </div>
);

export default RestaurantItem;
