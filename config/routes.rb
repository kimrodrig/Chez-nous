Rails.application.routes.draw do
  
  namespace :api do
    resources :members, only: [:create]

    post '/join', to: 'members#create'
    delete '/unsubscribe/:id', to: 'members#destroy'
    post '/getidbyphone', to: 'members#get_id_by_phone'

    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
