class RatingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :movie_id

  belongs_to :movie
end
