class Score < ApplicationRecord
  belongs_to :user
  belongs_to :house

  validates :candy, :scary, :comment, presence: true
end
