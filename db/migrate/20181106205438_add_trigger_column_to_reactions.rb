class AddTriggerColumnToReactions < ActiveRecord::Migration[5.2]
  def change
    add_column :reactions, :trigger, :string
  end
end
