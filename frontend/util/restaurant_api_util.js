export const fetchRestaurants = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/restaurants'
  });
};

export const fetchRestaurant = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `api/restaurants/${id}`
  });
};

export const searchRestaurants = (query) => {
  return $.ajax ({
    method: 'GET',
    url: 'api/restaurant_searches',
    data: {search: {query}}
  });
};
