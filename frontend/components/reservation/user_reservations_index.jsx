import React from 'react';
import ReservationItem from './user_reservation_item';

class ReservationIndex extends React.Component {

  render() {
    let reservations = this.props.user.reservations;

    return (
      <div>
        <h2>
            Upcoming Reservations:
        </h2>
        <ul>
          {
            reservations.map((reservation) => (
              <ReservationItem
                restaurant={this.props.restaurants[reservation.restaurant_id]}
                fetchRestaurant={this.props.fetchRestaurant}
                reservation={reservation}
                key={reservation.id}
                />
            ))
          }
        </ul>
      </div>
    );
  }

}

export default ReservationIndex;
