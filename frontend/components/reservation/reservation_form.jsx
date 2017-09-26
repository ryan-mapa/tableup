import React from 'react';
import ReservationCalendar from './reservation_calendar';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: "", time_slot: "", restaurant_id: "", user_id: ""};
  }

  handleSubmit() {

  }

  render() {
    console.log(this.props);
    return (
      <div>
        I ADDED SOME STUFF
      </div>
    );
  }

}

export default ReservationForm;
