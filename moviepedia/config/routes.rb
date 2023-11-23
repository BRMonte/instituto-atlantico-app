Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :movies, param: :slug
      resources :ratings, only: %i[create destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
