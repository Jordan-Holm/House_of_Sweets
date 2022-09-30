class AddImageToHouse < ActiveRecord::Migration[7.0]
  def change
    add_column :houses, :img, :string
  end
end
