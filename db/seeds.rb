# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all
Reservation.destroy_all
Review.destroy_all

User.create([
  {
    name: 'Ryan',
    username: 'ryan',
    email: 'emailz@email.com',
    password: '123456'
  },
  {
    name: 'David',
    username: 'david',
    email: 'emailz@email.com',
    password: '123456'
  },
  {
    name: 'AJ',
    username: 'aj',
    email: 'emailz@email.com',
    password: '123456'
  },
  {
    name: 'Peter',
    username: 'peter',
    email: 'emailz@email.com',
    password: '123456'
  },
  {
    name: 'Julie',
    username: 'julie',
    email: 'emailz@email.com',
    password: ''
  },
  {
    name: 'Jesse',
    username: 'jesse',
    email: 'emailz@email.com',
    password: '123456'
  },
  {
    name: 'Alex',
    username: 'alex',
    email: 'emailz@email.com',
    password: '123456'
  },
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
])

Restaurant.create([
  {
    name: "CK Palace",
    city: "San Francisco",
    price: 32,
    rating: 4.3,
    description: "Chris Kim's fantastical dining zone that he made from
                  2 pieces of twine and nickel! Give him some credit. He
                  worked really hard to get the funds to start the CK
                  restaurant group. Good for any occasion! Bring your kids.
                  Bring your wife. Bring everyone you know.",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/148555.jpg",
    open: 11,
    close: 22,
    cuisine: "Korean"
  },
  {
    name: "Sasaki",
    city: "San Francisco",
    price: 232,
    rating: 5.0,
    description: "Without doubt, the best sushi in San Francisco. An authentic invocation of a high-end Japanese sushi bar. Many excellent cuts of fish. Sasaki-san is wonderful to talk with, and will explain any questions. You won't leave hungry!",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/214570.jpg",
    open: 17,
    close: 23,
    cuisine: "Japanese, Sushi"
  },
  {
    name: "Denny's",
    city: "San Francisco",
    price: 6,
    rating: 2.3,
    description: "Not a good place for fine dining. Good for children, though. Dennys is a classica American style diner with a long-standing tradition of serving foodstuffs.",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/53449.jpg",
    open: 5,
    close: 23,
    cuisine: "American"
  },
  {
    name: "Iza Ramen",
    city: "San Francisco",
    price: 16,
    rating: 4.4,
    description: "New Ramen joint in the city. Great place to check out and try different styles of ramen. Tsukemen is what this place is all about!",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/117721.jpg",
    open: 17,
    close: 22,
    cuisine: "Japanese"
  },
  {
    name: "Din Tai Fung",
    city: "San Francisco",
    price: 32,
    rating: 4.3,
    description: "The all-famous soup dumpling restaurant. This restaurant is not actually in San Francisco, but one can dream and dream. One day it could happen!",
    profile_image: "https://assets.rappler.com/B09141B9439441678DCD1B4647DD6BFC/img/3EDEED8120114265ABA6F760848CC786/Din_Tai_Fung-1583_Exterior.jpg",
    open: 11,
    close: 21,
    cuisine: "Taiwanese"
  },
  {
    name: "Marumen",
    city: "Fairfax, VA",
    price: 12,
    rating: 4.8,
    description: "David Bank's favorite restaurant. Excellent ramen! LIT. It is also the only restaurant listed on TableUp in Fairfax. If TableUp becomes more popular expect to see more!",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/86974.jpg",
    open: 12,
    close: 20,
    cuisine: "Japanese"
  },
  {
    name: "Ruth's Chris Steakhouse",
    city: "San Francisco",
    price: 75,
    rating: 4.8,
    description: "Dat steak tho! Best steakhouse in San Francisco. (Words to spark a hot debate.) They serve their steaks on plates of sizzling butter. Recommend the small rib-eye with seafood tower!",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/3099.jpg",
    open: 17,
    close: 23,
    cuisine: "American, Steakhouse"
  },
  {
    name: "Border Grill",
    city: "Los Angeles",
    price: 27,
    rating: 4.2,
    description: "Enjoy upscale, modern Mexican food in a vibrant setting at Border Grill, the hip, urban cantina from Chefs Mary Sue Milliken and Susan Feniger, Food Network’s “Too Hot Tamales”. Presenting the bold foods and flavors of Mexico, Border Grill has established a new standard for gourmet Mexican fare.",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/2578.jpg",
    open: 11,
    close: 16,
    cuisine: "Mexican"
  },
  {
    name: "Malo",
    city: "Los Angeles",
    price: 22,
    rating: 4,
    description: "Recently awarded best ‘Chips and Salsa’ in Ciudad magazine and as ‘one of the best places to taste tequila’ in Los Angeles by Sunset magazine. Malo is the Silver Lake home to over 150 different tequilas.",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/6881.jpg",
    open: 11,
    close: 23,
    cuisine: "Mexican"
  },
  {
    name: "Takami Sushi & Robata Restaurant",
    city: "Los Angeles",
    price: 44,
    rating: 4.7,
    description: "Takami Sushi & Robata restaurant offers only the highest quality sushi grade fish. Featuring 3 kitchens, Sushi, Robata and Asian Fusion. Takami is the only restaurant located in Downtown LA offering outside dining 21 floors above the city.",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/12526.jpg",
    open: 17,
    close: 21,
    cuisine: "Japanese, Sushi"
  },
  {
    name: "Carlyle Restaurant",
    city: "New York",
    price: 75,
    rating: 5,
    description: "Open for breakfast, lunch and dinner this gracious elegant room furnished with pillow-sprinkled banquets, Fortuny fabric covered walls is the perfect setting for delightful French cuisine and discreet service. ",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/1833.jpg",
    open: 18,
    close: 23,
    cuisine: "French"
  },
  {
    name: "Smith & Wollensky",
    city: "New York",
    price: 90,
    rating: 4,
    description: "The landmark Smith & Wollensky in New York City is located on the corner of Third Avenue and 49th Street, serving outstanding steakhouse fare that features USDA Prime steaks, dry aged and butchered on-premise. ",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/6648.jpg",
    open: 12,
    close: 23,
    cuisine: "American, Steakhouse"
  },
  {
    name: "Sushi Inoue",
    city: "New York",
    price: 158,
    rating: 5,
    description: "Chef Inoue is not only knowledgeable in traditional sushi preparation, his expertise complements his friendly and welcoming bar.",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/189046.jpg",
    open: 18,
    close: 23,
    cuisine: "Japanese, Sushi"
  },
  {
    name: "ORAMA",
    city: "New York",
    price: 123,
    rating: 4,
    description: "Welcome to Orama. At Orama elegant & artistic ambiance is paired with delicious food, unique cocktails, fine wines & warm hospitality. At Orama guests are the center of our attention.",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/145732.jpg",
    open: 11,
    close: 22,
    cuisine: "Mediteranean"
  },
  {
    name: "Cicada",
    city: "Los Angeles",
    price: 106,
    rating: 4.5,
    description: "Cicada is a masterful combination of historic architecture and modern cuisine. From the 30-foot gold leaf ceiling to the luxurious Art Deco bar and lounge, Cicada has combined 1920s elegance with contemporary design elements to create an extraordinary atmosphere.",
    profile_image: "https://resizer.otstatic.com/v2/profiles/legacy/1296.jpg",
    open: 17,
    close: 22,
    cuisine: "Italian"
  }
])


guest1_id = User.where(username: 'guest1').first.id
sasaki = Restaurant.where(name: 'Sasaki').first.id
dintaifung = Restaurant.where(name: 'Din Tai Fung').first.id
carlyle = Restaurant.where(name: 'Carlyle Restaurant').first.id

Reservation.create([
  {
    user_id: guest1_id,
    restaurant_id: sasaki,
    date: Date.parse("Sun, 1 Apr 2018"),
    time_slot: 20,
    party_size: 2
  },
  {
    user_id: guest1_id,
    restaurant_id: dintaifung,
    date: Date.parse("Wed, 18 Apr 2018"),
    time_slot: 19,
    party_size: 2
  },
  {
    user_id: guest1_id,
    restaurant_id: carlyle,
    date: Date.parse("Wed, 25 Apr 2018"),
    time_slot: 18,
    party_size: 5
  }
])
