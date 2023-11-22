class RatingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score
end
