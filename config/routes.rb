Rails.application.routes.draw do
  
  namespace :api do
    resources :members
    resources :reservations
    resources :users, only: [:create, :show]
    resources :sessions

    post '/join', to: 'members#create'
    delete '/unsubscribe/:id', to: 'members#destroy'
    post '/getmemberbyphone', to: 'members#get_member_by_phone'
    post '/createreservation', to: 'reservations#create'
    patch '/editreservation/:id', to: 'reservations#update'
    post '/getreservationbytime', to: 'reservations#get_reservation_by_time'
    patch '/editreservationwithmemberid/:id', to: 'reservations#update_with_member_id'
    post '/mailchimp', to: "members#subscribe_to_mailchimp"

    post "/login", to: "sessions#create"
    delete "/sessions", to: "sessions#destroy"

  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
