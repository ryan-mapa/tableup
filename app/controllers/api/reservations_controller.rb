class Api::ReservationsController < ApplicationController
  def create
    # needs rest id, user id, reservation date and time
    @reservation = Reservation.new(reservation_params)
    @resrvation.restaurant_id = params[:restaurant_id]
    @reservation.user_id = current_user.id
    if @reservation.save

    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def index
    @resrvations = Resrvation.find_by
  end

  def destroy
  end

  def reservation_params
    params.require(:reservation).permit(:date, :time_slot)
  end
end
