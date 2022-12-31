class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.datetime :datetime
      t.integer :member_id
      

      t.timestamps
    end
  end
end
