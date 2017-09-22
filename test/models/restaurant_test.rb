# == Schema Information
#
# Table name: restaurants
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  creator_id    :integer
#  city          :string
#  price         :float
#  rating        :float
#  description   :text
#  profile_image :string
#  cuisine       :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
