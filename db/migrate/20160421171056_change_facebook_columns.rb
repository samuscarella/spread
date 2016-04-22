class ChangeFacebookColumns < ActiveRecord::Migration
  def change
    add_column :facebooks, :encrypted_app_id_iv, :string
    add_column :facebooks, :encrypted_app_secret_iv, :string
  end
end
