class CreateMovies < ActiveRecord::Migration[7.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.datetime :release_date
      t.text :plot
      t.integer :parental_rating
      t.references :rating, null: false, foreign_key: true
      t.float :runtime
      t.string :image_url
      t.string :slug

      t.timestamps
    end
  end
end
