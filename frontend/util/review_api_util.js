export const postReview = () => {
  return ({
    $.ajax ({
      method: 'POST',
      url: 'api/reviews'
    })
  });
};
