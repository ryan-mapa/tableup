import {connect} from 'react-redux';
import {createReview, fetchReviews} from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchReviews: (reviews) => dispatch(fetchReviews(reviews))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
