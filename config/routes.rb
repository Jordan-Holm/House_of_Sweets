Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users do
      resources :favorites
    end

    resources :houses do
      get '/candyAverage', to: 'houses#candyAverage'
      get '/scaryAverage', to: 'houses#scaryAverage'
      resources :scores
    end
  end
end
