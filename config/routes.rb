Rails.application.routes.draw do
  get '/favicon.ico', to: proc { [200, {}, ['']] }
  resources :subscribers
  resources :publishments
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
