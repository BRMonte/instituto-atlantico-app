require 'faker'

10.times do
  Movie.create(
    title: Faker::Movie.title,
    plot: Faker::Lorem.paragraph)
end
