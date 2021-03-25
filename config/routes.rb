Rails.application.routes.draw do
  # root 'static#home'

  namespace :api do 
    resources :blogs do
      resources :posts 
    end

    resources :posts do
      resources :comments
    end
  end
end
