R20130307Letsgitphysical::Application.routes.draw do
  root :to => 'home#index'
  resources :users, :only => [:index, :new, :create]
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
