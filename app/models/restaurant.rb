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

class Restaurant < ApplicationRecord
  validates :name, null: false, uniqueness: true

  def self.search_results(query)
    param = '%' + query.downcase + '%'
    Restaurant.where('lower(name) LIKE ?', param).limit(5)
  end
end
