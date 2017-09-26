import React from 'react';
import ReservationForm from '../reservation/reservation_form';

class RestaurantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.restaurant;

  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    if (!this.props.restaurant) {return null;}
    const restaurant = this.props.restaurant;

    let length = Math.round(restaurant.rating);
    let stars = "";
    for (var i = 0; i < length; i++) {
      stars += "★";
    }
    return (


      <div className='restaurant-detail-body'>
        <div className='banner-detail' >
          <span className='restaurant-profile-position'>
            <img className='restaurant-profile-image'
              src={restaurant.profile_image}></img>
            <h2>{restaurant.name}</h2>
            <div className='restaurant-highlights'>
              <br /><span>City: </span>{restaurant.city}
              <br /><span>Cuisine: </span>{restaurant.cuisine}
              <br /><span>Rating: </span><span className='star-rating'>{stars}</span>
              <br /><span>Avg. Price: $</span>{restaurant.price}<br />
            </div>

            <div className='reservation-form'>
              <ReservationForm restaurant={restaurant} currentUser={currentUser}/>
            </div>
          </span>
        </div>

        <div className='body-inner'>
          <span className='restaurant-info'>
            <br /><h3>Hours of Operation: </h3>{restaurant.open} to {restaurant.close}
            <br /><h3>Description: </h3>{restaurant.description}

          </span>
        </div>
      </div>
    );
  }

}

export default RestaurantDetail;
