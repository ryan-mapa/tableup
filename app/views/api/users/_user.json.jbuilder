if user
  json.extract! user, :id, :username, :email, :name, :reservations, :profile_image
else
  {}
end
