class AddPartySizeAndDietaryRestrictionsToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :party_size, :integer
    add_column :reservations, :dietary_restrictions, :text, array: true, default: []
  end
end
