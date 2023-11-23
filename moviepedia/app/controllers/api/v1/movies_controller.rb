module Api
  module V1
    class MoviesController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :set_movie, only: %i[show update destroy]

      def index
        movies = Movie.all

        render json: MovieSerializer.new(movies).serialized_json
      end

      def show
        render json: MovieSerializer.new(@movie).serialized_json
      end

      def create
        movie = Movie.new(movie_params)

        if movie.save
          render json: MovieSerializer.new(movie).serialized_json
        else
          render json: movie.errors, status: :unprocessable_entity
        end
      end

      def update
        if @movie.update(movie_params)
          render json: MovieSerializer.new(@movie).serialized_json
        else
          render json: @movie.errors, status: :unprocessable_entity
        end
      end

      def destroy
        if @movie.destroy
          head :no_content
        else
          render json: { error: @movie.errors.messages}, status: :unprocessable_entity
        end
      end

      private

      def set_movie
        @movie = Movie.includes(:ratings).find_by(slug: params[:slug])
      end

      def movie_params
        params.require(:movie).permit(
          :title,
          :plot,
          :image_url,
          :release_date,
          :parental_rating,
          :runtime
        )
      end
    end
  end
end
