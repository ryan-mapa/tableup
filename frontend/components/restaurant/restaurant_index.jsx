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
    console.log(this.props.restaurants);

    let emptyMessage;
    if (this.props.restaurants.length === 0) {
      emptyMessage = (
        <p className='empty-index-message'>
        No restaurants matched your search
      </p>);
    } else { emptyMessage = <div />; }

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
          {emptyMessage}
        </ul>
        <br />
      </div>
    );
  }
}

export default restaurantIndex;
