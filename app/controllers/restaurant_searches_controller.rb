class RestaurantSearchesController < ApplicationController

  def index
    @restaurants = Restaurant.search_results(search_params[:query])
  end

  def search_params
    params.require(:search).permit(:query)
  end
end
