import {RECEIVE_USER} from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newstate = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_USER:
      newstate[action.user.id] = action.user;
      return newstate;
    default:
      return state;
  }
};

export default UsersReducer;
