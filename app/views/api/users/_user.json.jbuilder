if user
  json.extract! user, :id, :username, :email, :name, :reservations
else
  {}
end
