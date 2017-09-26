import React from 'react';
import ReservationCalendar from './reservation_calendar';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: "",
      time_slot: "",
      restaurant_id: "", 
      user_id: "",
      party_size: ""
    };
  }

  handleSubmit() {

  }

  update(e) {

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Reserve and TableUp!</p>
        <ReservationCalendar restaurant={this.props.restaurant} />
        <form>
          <input
            className='search-input'
            placeholder='Restaurant, City, or Cuisine'
            value={this.state.party_size}
            onChange={e => this.update(e)}
            ></input>
        </form>

      </div>
    );
  }

}

export default ReservationForm;
