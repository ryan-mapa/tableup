import {RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default errorsReducer;
