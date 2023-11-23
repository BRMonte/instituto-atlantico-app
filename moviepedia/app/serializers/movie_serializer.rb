class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :image_url, :slug

  has_many :ratings
end
