class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :plot, :image_url, :ratings

  has_many :ratings
end
