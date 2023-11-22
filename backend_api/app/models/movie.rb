class Movie < ApplicationRecord
  has_many :ratings

  def average_score
    ratings.average(:score).round(2).to_f
  end
end
