class ModifyFacebookColumns < ActiveRecord::Migration
  def change
      remove_column :facebooks, :app_id
      remove_column :facebooks, :app_secret
      add_column :facebooks, :encrypted_app_id, :string
      add_column :facebooks, :encrypted_app_secret, :string
  end
end
