import React from 'react';
import RestaurantItem from '../restaurant/restaurant_item';

class ReservationItem extends React.Component {
  constructor(props) {
    super(props);

    this.convertTime = this.convertTime.bind(this);
  }

  convertTime(time) {
    if (time > 12) {
      return ` ${(time - 12)}:00 AM`;
    } else {
      return ` ${time}:00 PM`;
    }
  }

  componentDidMount() {

    this.props.fetchRestaurant(this.props.reservation.restaurant_id);
  }

  render() {
    if (!this.props.restaurant) return null;

    return (
      <div>
        <span className='reservation-message'>
          <h2>
            You have a reservation for {this.props.reservation.party_size} on
          </h2>
          <h2>
           {(this.props.reservation.date).slice(5)} at {this.convertTime(this.props.reservation.time_slot)}
          </h2>
        </span>
        <RestaurantItem restaurant={this.props.restaurant} />
      </div>
    );
  }


}

export default ReservationItem;
