Rails.application.routes.draw do
  resources :members, only: [:index, :create]

  post '/members', to: 'members#create'
end
