class AddImageToPublishments < ActiveRecord::Migration[6.0]
  def change
    add_column :publishments, :image, :string
  end
end
