class Api::RestaurantsController < ApplicationController
  def create

  end

  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find_by(id: params[:id])
  end

  def update
  end

  def restaurant_params
    params.require(:restaurant).permit(:name)
  end
end
