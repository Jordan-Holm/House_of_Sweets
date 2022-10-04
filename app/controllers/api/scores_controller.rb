class Api::ScoresController < ApplicationController
  before_action :set_parent
  before_action :set_score, only: [:show, :update, :destroy]

  def index
    render json: @house.score.all
  end

  def show
    render json: @score
  end

  def create
    @score = @house.score.new(score_params)
    if @score.save
      render json: @score
    else
      render json: { errors: @score.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @score.update(score_params)
      render json: @score
    else
      render json: { errors: @score.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @score.destroy
    render json: { message: 'score deleted' }
  end


  private
    def score_params
      params.require(:candy, :scary, :comment)
    end

    def set_score
      @score = @house.score.find(params[:id])
    end

    def set_parent
      @house = House.find(params[:house_id])
    end  
    
end