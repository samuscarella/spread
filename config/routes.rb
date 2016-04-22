Rails.application.routes.draw do

  resources :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'users#index'

  get 'register' => 'users#new'
  get 'login' => 'users#login'
  get 'dash' => 'users#show'
  get '/users/:id/profile' => 'users#profile'
  post 'users/:id/profile/remove_facebook_token' => 'social#removeFacebookToken'

  get "/auth/:action/callback", :controller => "authentications", :constraints => { :action => /twitter|facebook/ }

  post 'authentication' => 'users#authentication'
  get 'logout' => 'users#logout'

  get 'facebook_account_token' => 'social#facebookAccountToken'
  post 'facebook_account_status' => 'social#facebookAccountStatus'
  post 'facebook_long_token' => 'social#facebookLongToken'

  post 'verify_facebook_long_token' => 'social#verify_facebook_auth'
  post '/bomb' => 'bombs#detonate'
  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
