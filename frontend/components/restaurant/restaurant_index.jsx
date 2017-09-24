import React from 'react';
import RestaurantItem from './restaurant_item';


class restaurantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRestaurants();
  }

  render() {

    return (
      <div className='restaurant-index'>
        <br />
        <ul>
          {this.props.restaurants.map(restaurant => (
              <RestaurantItem
                key={restaurant.id}
                restaurant={restaurant}
              />
          ))}
        </ul>
        <br />
      </div>
    );
  }
}

export default restaurantIndex;
