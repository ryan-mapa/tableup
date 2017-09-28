import React from 'react';
import ReservationItem from './user_reservation_item';

class ReservationIndex extends React.Component {

  render() {
    let reservations = this.props.user.reservations;

    return (
      <div className='main-container'>
        <h2 className='upcoming-reservations'>
            Upcoming Reservations:
        </h2><hr />
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
