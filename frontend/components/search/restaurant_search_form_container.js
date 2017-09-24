import {connect} from 'react-redux';
import RestaurantSearchForm from './restaurant_search_form';
import {
  fetchRestaurants,
  searchRestaurants} from '../../actions.restaurant_actions';

const mapStateToProps = (state) => ({
  restaurants: state.entities.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurants: () => dispatch(fetchRestaurants()),
  searchRestaurants: (query) => dispatch(searchRestaurants(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantSearchForm);
