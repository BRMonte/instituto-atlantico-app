module Api
  module V1
    class RatingsController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :set_rating, only: %i[destroy]

      def create
        rating = Rating.new(rating_params)

        if rating.save
          render json: RatingSerializer.new(rating).serialized_json
        else
          rrender json: { error: rating.errors.messages }, status: :unprocessable_entity
        end
      end

      def destroy
        if @rating.destroy
          head :no_content
        else
          render json: @rating.errors, status: :unprocessable_entity
        end
      end

      private

      def set_rating
        @rating = Rating.find(params[:id])
      end

      def rating_params
        params.require(:rating).permit(:score, :title, :description, :movie_id)
      end
    end
  end
end
