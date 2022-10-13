class Api::FavoritesController < ApplicationController
  before_action :set_parent
  before_action :set_favorite, only: [:show, :update, :destroy]

  def index
    render json: @user.favorites.all
  end

  def show
    render json: @favorite
  end

  def create
    @favorite = @user.favorites.new(favorite_params)
    if @favorite.save 
      render json: @favorite
    else
      render json: {errors: @favorite.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @favorite.destroy
    render json: { message: 'favorite house deleted' }
  end

  private
    def favorite_params
      params.require(:favorite).permit(:house_id, :user_id)
    end
    
    def set_favorite
      @favorite = @user.favorites.find(params[:id])
    end

    def set_parent
      @user = User.find(params[:user_id])
    end

end
