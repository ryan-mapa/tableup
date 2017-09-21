import {connect} from 'react-redux';
import {signup, login} from '../../actions/session_actions';
import SignupModal from './signup_modal';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModal);
