import {connect} from 'react-redux';
import {createReservation} from '../../actions/reservation_actions';
import ReservationForm from './reservation_form';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  createReservation: (reservation) => dispatch(createReservation(reservation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
