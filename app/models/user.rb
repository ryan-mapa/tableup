# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  profile_image   :string
#

class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true
  after_initialize :ensure_session_token, :ensure_profile_image

  attr_reader :password

  has_many :reservations
  has_many :reviews

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_profile_image
    self.profile_image ||=
      "http://www.tinygraphs.com/squares/#{self.username}?theme=frogideas&numcolors=4&size=220&fmt=svg"
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end
end
