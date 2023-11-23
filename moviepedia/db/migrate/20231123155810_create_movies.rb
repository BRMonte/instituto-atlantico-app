class CreateMovies < ActiveRecord::Migration[7.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.datetime :release_date
      t.text :plot
      t.integer :parental_rating
      t.float :runtime
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
