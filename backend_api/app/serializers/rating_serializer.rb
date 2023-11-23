class RatingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score, :id
end
