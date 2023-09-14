class CreatePublishments < ActiveRecord::Migration[6.0]
  def change
    create_table :publishments do |t|
      t.string :title
      t.string :link
      t.string :summary
      t.string :style
      t.date :published_at


      t.timestamps
    end
  end
  end
