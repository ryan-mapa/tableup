Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants, only: [:create, :index, :show, :update]
    resources :restaurant_searches, only: [:index]
    resources :reservations, only: [:create, :index, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root "static_pages#root"

end
