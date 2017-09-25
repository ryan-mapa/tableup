Rails.application.routes.draw do

  get 'reservations/create'

  get 'reservations/show'

  get 'reservations/index'

  get 'reservations/destroy'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants, only: [:create, :index, :show, :update]
    resources :restaurant_searches, only: [:index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root "static_pages#root"

end
