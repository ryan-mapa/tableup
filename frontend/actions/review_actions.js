import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const createReview = (review) => dispatch => (
  APIUtil.postReview(review).then((review) => dispatch(receiveReview(review)))
);

export const fetchReviews = () => dispatch => (
  APIUtil.fetchReviews().then((reviews) => dispatch(receiveReviews(reviews)))
);
