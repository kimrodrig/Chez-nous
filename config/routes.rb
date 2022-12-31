Rails.application.routes.draw do
  
  namespace :api do
    resources :members
    resources :reservations

    post '/join', to: 'members#create'
    delete '/unsubscribe/:id', to: 'members#destroy'
    post '/getmemberbyphone', to: 'members#get_member_by_phone'
    post '/createreservation', to: 'reservations#create'
    patch '/editreservation/:id', to: 'reservations#update'
    patch '/editreservationwithmemberid/:id', to: 'reservations#update_with_member_id'

    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  end
end
