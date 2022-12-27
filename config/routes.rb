Rails.application.routes.draw do
  
  namespace :api do
    resources :members, only: [:create]

    post '/join', to: 'members#create'

    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
