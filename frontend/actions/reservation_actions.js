import * as APIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";

export const receiveReservation = (reservation) => ({
  Type: RECEIVE_RESERVATION,
  reservation
});

export const createReservation = (reservation) => dispatch => (
  APIUtil.createReservation(reservation)
      .then((reservation) => dispatch(receiveReservation(reservation)))
);
