class AddColumnPartyToReservations < ActiveRecord::Migration[5.1]
  def change
    add_column :reservations, :party_size, :integer, null: false
  end
end
