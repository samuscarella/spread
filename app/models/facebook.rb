class Facebook < ActiveRecord::Base
  attr_encrypted :app_id, key: 'This is a key for app_id that is 256 bits!!'
  attr_encrypted :app_secret, key: 'This is a key for app_secret that is 256 bits!!'
end
