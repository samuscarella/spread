class CreateFacebooks < ActiveRecord::Migration
  def change
    create_table :facebooks do |t|
      t.string :app_id
      t.string :app_secret

      t.timestamps null: false
    end
  end
end
