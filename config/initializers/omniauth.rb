OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  on_failure { |env| AuthenticationsController.action(:failure).call(env) }
  provider :facebook, '1164103073651848', 'c9b2a304af2174b997cdbac280f03372',
           :scope => 'email,user_birthday,read_stream', :display => 'popup', info_fields: 'email,name'
end
