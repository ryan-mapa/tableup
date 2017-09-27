import {connect} from 'react-redux';
import UserProfile from './user_profile';
import {fetchUser} from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, routeprops) => ({
  user: state.entities.users[routeprops.match.params.userId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile));
