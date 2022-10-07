class House < ApplicationRecord
    has_many :scores, dependent: :destroy
    # has_many :favorites, dependent: :destroy

    has_many :users, through: :scores
    # has_many :users, through: :favorites

    validates :house_name, :address, :city, :avg_candy, :avg_scary, presence: true
    validates :address, uniqueness: true
end
