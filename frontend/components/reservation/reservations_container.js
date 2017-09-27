import {connect} from 'react-redux';
import {createReservation} from '../../actions/reservation_actions';
import ReservationForm from './reservation_form';
import {toggleLoginModal} from '../../actions/ui_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  toggleLoginModal: () => dispatch(toggleLoginModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
