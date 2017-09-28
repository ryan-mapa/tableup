import React from 'react';
import ReservationItem from './user_reservation_item';

class ReservationIndex extends React.Component {

  render() {
    let reservations = this.props.user.reservations;

    let noReservations;
    if (reservations.length === 0) {
      noReservations = 'You have no Reservations';
    } else {
      noReservations = '';
    }

    return (
      <div className='main-container'>
        <h2 className='upcoming-reservations'>
            Your Reservations:
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

        <div className='empty-index-message' ><h2>{noReservations}</h2></div>

      </div>
    );
  }

}

export default ReservationIndex;
