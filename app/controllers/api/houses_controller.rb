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
    house.house_name = params[:house_name] ? params[:house_name] : house.house_name
    house.address = params[:address] ? params[:address] : house.address
    house.city = params[:city] ? params[:city] : house.city

    file = params[:file]

    if file && file != '' && file != "undefined"
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        house.image = cloud_image['secure_url']
        if house.save
          render json: house
        else
          render json: { errors: house.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errros: e }, status: 422
      end
    else
      if house.save
        render json: house
      else
        render json: { errors: house.errors.full_messages }, status: 422
      end
    end
    
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
