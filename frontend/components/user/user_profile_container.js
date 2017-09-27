import {connect} from 'react-redux';
import UserProfile from './user_profile';
import fetchUser from '../../actions.user_actions';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
