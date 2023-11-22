require 'faker'

20.times do
  Movie.create(
    title: Faker::Movie.title,
    plot: Faker::Lorem.paragraph,
    image_url: 'https://images.unsplash.com/photo-1536323760109-ca8c07450053'
  )
end

scores = [0, 1, 2, 3, 4, 5]
movie_ids = (0..20).to_a

50.times do
  Rating.create(
    score: scores.sample,
    movie_id: movie_ids.sample
  )
end
