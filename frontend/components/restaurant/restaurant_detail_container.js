import {connect} from 'react-redux';
import {
  fetchRestaurant
} from '../../actions/restaurant_actions';
import RestaurantDetail from './restaurant_detail';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, routeprops) => ({
  restaurant: state.entities.restaurants[routeprops.match.params.restaurantId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail));
