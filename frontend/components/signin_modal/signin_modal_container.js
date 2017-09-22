import {connect} from 'react-redux';
import {logout, login, clearErrors} from '../../actions/session_actions';
import SigninModal from './signin_modal';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: (user) => dispatch(logout(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninModal);
