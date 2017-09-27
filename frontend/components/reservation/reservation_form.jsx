import React from 'react';
import ReservationCalendar from './reservation_calendar';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date();
    this.state = {
      date: now.toDateString(),
      time_slot: now.getHours(),
      restaurant_id: this.props.restaurant.id,
      user_id: this.props.currentUser ?
                this.props.currentUser.id : undefined,
      party_size: undefined
    };
    this.parseDate = this.parseDate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser === null) {
      this.props.toggleLoginModal();
    } else if (this.state.party_size === undefined) {
      window.alert("Please select a valid date and party size.");
    } else {
      this.props.createReservation(this.state);

    }
  }

  update(e, field) {

    this.setState({[field]: e.currentTarget.value});
  }

  parseDate(newdate) {
    let dateString = newdate.toDateString();
    let time = newdate.getHours();
    this.setState({date: dateString, time_slot: time });
  }

  render() {
    console.log(this.state);


    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>Reserve and TableUp!</p>
          <span className='search-bar'>
            <ReservationCalendar
              parseDate={this.parseDate}
              restaurant={this.props.restaurant} />
            <input
              className='reservation-search-input'
              placeholder='Party Size'
              type='number'
              min='1'
              value={this.state.party_size}
              onChange={e => this.update(e, 'party_size')}
              ></input>
            <input className='search-button' type='submit' value='TableUp'></input>
          </span>
        </form>

      </div>
    );
  }

}

export default ReservationForm;
