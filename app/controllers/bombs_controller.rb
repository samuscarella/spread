class BombsController < ApplicationController
  # protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  respond_to :html, :js
  # GET /users.json
  def detonate
    oauth_access_token = 'CAACEdEose0cBAAsuZAWmDuSvmbC3nGhzVY3rVzmygqU5xithZB9jo9LKyHUexnzfczPpzFKa4S0rG6M7w1Ybg2qxZAewXzWBBLxq9bZCRkAig58PlHPBnZAZAMGSZAooE4ZAYYDxZA9wPmsImuq4hk9LwpHLQXO7nilf6rf82uzbKBBVcocnZBZCWuYpULq7e2CetRsD9aQjZBazJwZDZD'
    @graph = Koala::Facebook::API.new(oauth_access_token)
    profile = @graph.get_object("me")
    puts oauth_access_token
    # puts profile
    @user = User.find_by_id(params[:user_id])
    redirect_to @user
  end

end
