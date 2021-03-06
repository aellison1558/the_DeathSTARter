Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session, only: [:new, :create, :destroy, :show]
  post '/session/ensure', to: 'sessions#ensure'

  namespace :api do
    resources :categories do
      resources :projects, only: [:index]
    end

    resources :projects
    resources :backings, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :images, only: [:create, :destroy]
  end
end
