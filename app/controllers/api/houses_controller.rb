class Api::HousesController < ApplicationController
  before_action :set_house, only: [:show, :update, :destroy]

  def index
    render json: House.all 
  end

  def show
    render json: @house
  end

  def create
    @house = House.new(house_params)
    if @house.save 
      render json: @house
    else
      render json: { errors: @house.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @house.update(house_params)
      render json: @house
    else 
      render json: { errors: @house.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @house.destroy 
    render json: { message: 'House deleted'}
  end

  private 

    def house_params
      params.require(:house).permit(:house_name, :address, :city, :img, :avg_candy, :avg_scary )
    end

    def set_house
      @house = House.find(params[:id])
    end
end
