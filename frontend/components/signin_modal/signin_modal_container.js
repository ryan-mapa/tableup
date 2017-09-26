import {connect} from 'react-redux';
import {logout, login, clearErrors} from '../../actions/session_actions';
import SigninModal from './signin_modal';
import {toggleLoginModal} from '../../actions/ui_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  loginModalOpen: state.ui.loginModalOpen
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: (user) => dispatch(logout(user)),
  clearErrors: () => dispatch(clearErrors()),
  toggleLoginModal: () => dispatch(toggleLoginModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninModal);
