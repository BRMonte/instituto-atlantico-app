class Movie < ApplicationRecord
  has_many :ratings

  before_create :slugfy

  def slugfy
    self.slug = title.parametrize
  end

  def average_score
    ratings.average(:score).round(2).to_f
  end
end
