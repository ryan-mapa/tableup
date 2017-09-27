import {RECEIVE_RESERVATION} from '../actions/reservation_actions';

const ReservationReducer = (state = {}, action) => {
  Object.freeze(state);
  let newstate = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_RESERVATION:
      newstate[action.reservation.id] = action.reservation;
      return newstate;
    default:
      return state;
  }
};

export default ReservationReducer;
