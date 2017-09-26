import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantItem = ({restaurant}) => {
  let length = Math.round(restaurant.rating);
  let stars = "";
  for (var i = 0; i < length; i++) {
    stars += "★";
  }
  return (
    <div className='restaurant-index-item'>
      <span>
        <Link to={`/restaurants/${restaurant.id}`} >
          <img className='restaurant-profile-image'
            src={restaurant.profile_image}></img>
        </Link>
      </span>
      <span className='restaurant-info'>
        <h2>{restaurant.name}</h2>

        <br /><span>City: </span>{restaurant.city}
        <br /><span>Cuisine: </span>{restaurant.cuisine}
        <br /><span>Rating: </span><span className='star-rating'>{stars}</span>
        <br /><span>Avg. Price: $</span>{restaurant.price}<br />
        <br /><h3>Description: </h3>{restaurant.description}
      </span>
      <br />
      <br />
    </div>
  );
};

export default RestaurantItem;
