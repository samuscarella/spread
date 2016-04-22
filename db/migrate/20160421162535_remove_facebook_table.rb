class RemoveFacebookTable < ActiveRecord::Migration
  def change
    drop_table :facebooks
  end
end
