import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class ReservationCalendar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment(),
      open: this.props.restaurant.open,
      close: this.props.restaurant.close
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.props.parseDate(date._d);
  }

  render() {
    const open = this.props.restaurant.open;
    const close = this.props.restaurant.close;

    return <DatePicker className='calendar-style'
        selected={this.state.startDate}
        onChange={this.handleChange}

        showTimeSelect
        timeIntervals={60}
        minDate={moment()}

        minTime={moment().hours(open).minutes(0)}
        maxTime={moment().hours(close).minutes(0)}

        dateFormat="LLL"
    />;
  }
}

export default ReservationCalendar;
