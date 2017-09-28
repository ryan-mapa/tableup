import {RECEIVE_REVIEW} from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newstate = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_REVIEW:
      newstate[action.review.id] = action.review;
      return newstate;
    default:
      return state;
  }
};

export default ReviewsReducer;
