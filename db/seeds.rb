# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest_users = User.create([
  {
    name: 'Guest',
    username: 'guest1',
    email: 'guest1@email.com',
    password: '123456'
  },
  {
    name: 'Guest',
    username: 'guest2',
    email: 'guest2@email.com',
    password: '123456'
  },
  {
    name: 'Guest',
    username: 'guest3',
    email: 'guest3@email.com',
    password: '123456'
  },
  {
    name: 'Guest',
    username: 'guest4',
    email: 'guest4@email.com',
    password: '123456'
  },
  {
    name: 'Guest',
    username: 'guest5',
    email: 'guest5@email.com',
    password: '123456'
  },
  {
    name: 'Guest',
    username: 'guest6',
    email: 'guest6@email.com',
    password: '123456'
  },
  {
    name: 'Guest',
    username: 'guest7',
    email: 'guest7@email.com',
    password: '123456'
  }
])
