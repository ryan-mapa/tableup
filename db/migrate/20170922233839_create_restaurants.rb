class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.integer :creator_id
      t.string :city
      t.float :price
      t.float :rating
      t.text :description
      t.string :profile_image
      t.integer :open
      t.integer :close
      t.string :cuisine

      t.timestamps
    end

    add_index :restaurants, :name
  end
end
