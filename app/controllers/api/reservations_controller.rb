class Api::ReservationsController < ApplicationController
  def create
    # needs rest id, user id, reservation date and time
    @reservation = Reservation.new(reservation_params)
    if current_user
      @reservation.user_id = current_user.id
      @reservation.save
      render json: @reservation
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def index
    @reservations = Reservation.find_by
  end

  def destroy
  end

  def reservation_params
    params.require(:reservation).permit(
          :date, :time_slot, :restaurant_id, :party_size, :user_id)
  end
end
