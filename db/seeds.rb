# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all

User.create([
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

Restaurant.create([
  {
    name: "CK Palace",
    city: "San Francisco",
    price: 32,
    rating: 4.3,
    description: "Chris Kim's fantastical dining zone that he made from 2 pieces of twine and nickel!",
    profile_image: "",
    cuisine: "korean"
  },
  {
    name: "Sasaki",
    city: "San Francisco",
    price: 232,
    rating: 5.0,
    description: "Without doubt, the best sushi in San Francisco. Truly authentic and traditional!",
    profile_image: "",
    cuisine: "Japanese"
  },
  {
    name: "Denny's",
    city: "San Francisco",
    price: 6,
    rating: 2.3,
    description: "Not a good place for fine dining. Good for children, though.",
    profile_image: "",
    cuisine: "american"
  },
  {
    name: "Iza Ramen",
    city: "San Francisco",
    price: 16,
    rating: 4.6,
    description: "Tsukemen is what this place is all about!",
    profile_image: "",
    cuisine: "Japanese"
  },
  {
    name: "Din Tai Fung",
    city: "San Francisco",
    price: 32,
    rating: 4.3,
    description: "The all-famous soup dumpling restaurant",
    profile_image: "",
    cuisine: "Taiwanese"
  },
  {
    name: "Marumen",
    city: "Fairfax, VA",
    price: 12,
    rating: 4.8,
    description: "David Bank's favorite restaurant. Excellent ramen! LIT.",
    profile_image: "",
    cuisine: "Japanese"
  },
  {
    name: "Ruth's Chris Steakhouse",
    city: "San Francisco",
    price: 75,
    rating: 4.8,
    description: "Dat steak tho!",
    profile_image: "",
    cuisine: "American"
  },
])
