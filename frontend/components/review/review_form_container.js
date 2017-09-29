import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions';
import ReviewForm from './review_form';
import {toggleLoginModal} from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  toggleLoginModal: () => dispatch(toggleLoginModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
