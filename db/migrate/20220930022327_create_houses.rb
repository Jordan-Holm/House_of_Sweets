class CreateHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :houses do |t|
      t.string :house_name
      t.string :address
      t.integer :avg_candy
      t.integer :avg_scary

      t.timestamps
    end
  end
end
