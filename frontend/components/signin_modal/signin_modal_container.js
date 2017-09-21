import {connect} from 'react-redux';
import {logout, login} from '../../actions/session_actions';
import SigninModal from './signin_modal';

const mapStateToProps = (state) => ({
  // junk: console.log(state),
  // storestate: state,
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: (user) => dispatch(logout(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninModal);
