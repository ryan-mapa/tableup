# == Schema Information
#
# Table name: reservations
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  date          :date             not null
#  time_slot     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  party_size    :integer          not null
#

class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, :date, :time_slot, null: false

  belongs_to :user
end
