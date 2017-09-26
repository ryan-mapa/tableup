export const createReservation = (reservation) => (
  $.ajax ({
      method: 'POST',
      url: 'api/reserevations',
      data: reservation
  })
);
