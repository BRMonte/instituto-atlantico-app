class FetchMoviesService
  require 'httparty'
  BASE_URL = "https://api.themoviedb.org/3"

  def self.perform
    response = HTTParty.get("#{BASE_URL}/movie/popular?api_key=#{ENV['MOVIES_DB_API_KEY']}")
    movies = JSON.parse(response.body)['results']
  end
end
