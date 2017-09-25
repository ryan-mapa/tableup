class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.date :date, null: false
      t.integer :time_slot, null: false

      t.timestamps
    end
  end
end
