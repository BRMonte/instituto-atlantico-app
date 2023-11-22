class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :plot, :image_url

  has_many :ratings
end
