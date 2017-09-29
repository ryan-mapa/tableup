class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if current_user
      @review.user_id = current_user.id
      @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
  end

  def destroy
  end

  def review_params
    params.require(:review).permit(:body, :user_id, :restaurant_id)
  end
end
