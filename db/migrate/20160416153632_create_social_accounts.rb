class CreateSocialAccounts < ActiveRecord::Migration
  def change
    create_table :social_accounts do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
