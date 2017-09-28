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


    let emptyMessage;
    if (this.props.restaurants.length === 0) {
      emptyMessage = (
        <div className='empty-index-message'>
          <h2>No restaurants matched your search</h2>
        </div>);
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
