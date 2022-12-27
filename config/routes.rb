Rails.application.routes.draw do
  
  namespace :api do
    resources :members, only: [:index, :create]

    post '/join', to: 'members#create'
  end
end
