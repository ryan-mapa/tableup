import React from 'react';
import ReservationItem from './user_reservation_item';

class ReservationIndex extends React.Component {

  render() {
    let reservations = this.props.user.reservations;

    return (
      <div>
        <ul>
          {
            reservations.map((reservation) => (
              <ReservationItem
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
