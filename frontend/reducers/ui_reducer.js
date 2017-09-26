import {TOGGLE_LOGIN} from '../actions/ui_actions';
import merge from 'lodash/merge';

const uiReducer = (state = {loginModalOpen: false}, action) => {
  Object.freeze(state);
  let newstate = merge({}, state);

  switch(action.type) {
    case TOGGLE_LOGIN:
      newstate.loginModalOpen = !(newstate.loginModalOpen);
      return newstate;
    default:
      return state;
  }
};

export default uiReducer;
