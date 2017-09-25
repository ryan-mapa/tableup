import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';



const RestaurantItem = ({restaurant}) => {
  let length = Math.round(restaurant.rating);
  let stars = "";
  for (var i = 0; i < length; i++) {
    stars += "★";
  }
  return (
    <div className='restaurant-index-item'>
      <span>
        <img className='restaurant-profile-image'
              src={restaurant.profile_image}></img>
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
