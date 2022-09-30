class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.integer :candy
      t.integer :scary
      t.text :comment
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :house, null: false, foreign_key: true

      t.timestamps
    end
  end
end
