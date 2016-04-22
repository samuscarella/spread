require 'net/http'

class SocialController < ApplicationController
  respond_to :html, :json
  # POSSIBLE SECURITY FLAW
  # FIX ABILITY TO PROCRESS THE AUTH TOKEN
  skip_before_filter :verify_authenticity_token
  # GET /users.json
  def facebookLongToken
      token = params[:token]
      user = params[:user]
      uri = URI('https://graph.facebook.com/oauth/access_token')
      params = { :grant_type => 'fb_exchange_token', :client_id => facebook_app_id, :client_secret => facebook_app_secret, :fb_exchange_token => token }
      uri.query = URI.encode_www_form(params)
      long = Net::HTTP.get_response(uri)
      u = User.find_by_id(user)
      u.update_attribute(:facebook_token, long.body)
      respond_to do |format|
          format.json { render :json => long.body.to_json }
      end
  end

  def facebookAccountToken
      user = User.find(current_user.id)
      respond_to do |format|
          format.json { render :json => user.facebook_token.to_json }
      end
  end

  def facebookAccountStatus
      token = params[:token]
      @graph = Koala::Facebook::API.new(token)
      profile = @graph.get_object('me');
      respond_to do |format|
          format.json { render :json => token.to_json }
      end
  end

  def removeFacebookToken
    user = User.find(current_user.id)
    user.update_attribute(:facebook_token, "")
    puts user
    respond_to do |format|
        format.json { render :json => true }
    end

  end

  private
    def facebook_app_id
      Facebook.first.app_id
    end

    def facebook_app_secret
      Facebook.first.app_secret
    end

end
