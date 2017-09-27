import * as APIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";

export const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const createReservation = (reservation) => dispatch => (
  APIUtil.createReservation(reservation)
      .then((areservation) => dispatch(receiveReservation(areservation)))
);
