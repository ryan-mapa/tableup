import {connect} from 'react-redux';
import {createReview, fetchReviews} from '../../actions/review_actions';
import ReviewIndex from './review_index';
import {fetchUser} from '../../actions/user_actions';
import {fetchRestaurant} from '../../actions/restaurant_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  reviews: Object.values(state.entities.reviews) || [],
  users: state.entities.users,
  restaurants: state.entities.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchReviews: (reviews) => dispatch(fetchReviews(reviews)),
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchRestaurant: (restaurant) => dispatch(fetchRestaurant(restaurant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
