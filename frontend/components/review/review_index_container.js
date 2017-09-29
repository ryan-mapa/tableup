import {connect} from 'react-redux';
import {createReview, fetchReviews} from '../../actions/review_actions';
import ReviewIndex from './review_index';
import {fetchUser} from '../../actions/user_actions';
import {fetchRestaurant} from '../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, routeprops) => ({
  currentUser: state.session.currentUser,
  reviews: Object.values(state.entities.reviews) || [],
  users: state.entities.users,
  restaurants: state.entities.restaurants,
  user: routeprops.match.params.userId,
  restaurant: routeprops.match.params.restaurantId
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchReviews: (reviews) => dispatch(fetchReviews(reviews)),
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchRestaurant: (restaurant) => dispatch(fetchRestaurant(restaurant))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex));
