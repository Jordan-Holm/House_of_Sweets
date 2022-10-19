class Api::ScoresController < ApplicationController
  before_action :set_parent
  before_action :set_score, only: [:show, :update, :destroy]

  def index
    render json: @house.scores
  end

  def show
    render json: @score
  end

  def create
    @score = @house.scores.new(score_params)
    @score.user_id = current_user.id
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
      params.require(:score).permit(:candy, :scary, :comment)
    end

    def set_score
      @score = @house.scores.find(params[:id])
    end

    def set_parent
      @house = House.find(params[:house_id])
    end  
    
end