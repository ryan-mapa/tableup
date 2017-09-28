import {connect} from 'react-redux';
import UserReservationIndex from './user_reservations_index';
import {fetchRestaurant} from '../../actions/restaurant_actions';

const mapStateToProps = (state) => ({
  restaurants: state.entities.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserReservationIndex);
