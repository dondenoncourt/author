class CreateSubcscribers < ActiveRecord::Migration[7.0]
  def change
    create_table :subcscribers do |t|
      t.string :first_name
      t.string :last_name
      t.string :email

      t.timestamps
    end
  end
end
