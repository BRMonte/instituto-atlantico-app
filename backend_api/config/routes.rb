Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :movies
      resources :ratings, only: %i[create destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all

  get "up" => "rails/health#show", as: :rails_health_check
end
