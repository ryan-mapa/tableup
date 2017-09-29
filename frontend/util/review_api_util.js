export const postReview = (review) => {
  return (
    $.ajax ({
      method: 'POST',
      url: 'api/reviews',
      data: {review}
    })
  );
};

export const fetchReviews = () => {
  return (
    $.ajax ({
      method: 'GET',
      url: 'api/reviews',
    })
  );
};
