class ApplicationController < ActionController::Base
   # For APIs, you may want to use :null_session instead.
   protect_from_forgery with: :null_session
   helper_method :current_user, :logged_in?
  #  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
   def current_user
     @current_user ||= User.find_by_id(session[:current_user])
   end

   def logged_in?
     current_user != nil
   end
end
