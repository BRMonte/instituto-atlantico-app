class Api::V1::MoviesController < ApplicationController
  before_action :set_movie, only: %i[ show update destroy ]

  def index
    @movies = Services::FetchMoviesService.perform.limit(10)

    render json: @movies
  end

  def show
    render json: @movie
  end

  def create
    @movie = Movie.new(movie_params)

    if @movie.save
      render json: @movie, status: :created, location: api_v1_movie_path(@movie)
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @movie.destroy!
  end

  private
    def set_movie
      @movie = Movie.find(params[:id])
    end

    def movie_params
      params.require(:movie).permit(:title, :plot)
    end
end
