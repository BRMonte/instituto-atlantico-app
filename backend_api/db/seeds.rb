require 'faker'

25.times do
  Movie.create(
    title: Faker::Movie.title,
    plot: Faker::Lorem.paragraph)
end
