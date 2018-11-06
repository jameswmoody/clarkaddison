class CreateReactions < ActiveRecord::Migration[5.2]
  def change
    create_table :reactions do |t|
      t.text :description
      t.integer :rating
      t.integer :dog_id

      t.timestamps
    end
  end
end
