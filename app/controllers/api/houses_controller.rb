class Api::HousesController < ApplicationController
  before_action :set_house, only: [:show, :update, :destroy]

  def index
    paginate json: House.all, per_page: 10;
  end

  def show
    render json: @house
  end

  def create
    @house = House.new()
    @house.house_name = params[:house_name]
    @house.address = params[:address]
    @house.city = params[:city]
    @house.img = params[:img]
    
    file = params[:file]

    if file && file != '' && file != "undefined"
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @house.img = cloud_image['secure_url']
        if @house.save
          render json: @house
        else
          render json: { errors: @house.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errros: e }, status: 422
      end
    else
      if @house.save
        render json: @house
      else
        render json: { errors: @house.errors.full_messages }, status: 422
      end
    end
    
    # if @house.save
    #   render json: @house
    # else 
    #   render json: { errors: @house.errors }, status: :unprocessable_entity
    # end
  end

  def update
    @house.house_name = params[:house_name] ? params[:house_name] : @house.house_name
    @house.address = params[:address] ? params[:address] : @house.address
    @house.city = params[:city] ? params[:city] : @house.city

    file = params[:file]

    if file && file != '' && file != "undefined"
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @house.img = cloud_image['secure_url']
        if @house.save
          render json: @house
        else
          render json: { errors: @house.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errros: e }, status: 422
      end
    else
      if @house.save
        render json: @house
      else
        render json: { errors: @house.errors.full_messages }, status: 422
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

  def candyAverage
    # @house_candy_average = House.where(:House.candyAvg)
    #     .joins(:scores)
    #     .where(scores: {candy})

    # House.candyAvg
    @house = House.find(params[:house_id])
    if (@house.scores.any?)
      render json: @house.scores.average(:candy).to_i
    else
      render json: { errors: "Not Rated Yet"}
    end
  end

  def scaryAverage
    @house = House.find(params[:house_id])
    if (@house.scores.any?)
      render json: @house.scores.average(:scary).to_i
    else
      render json: { errors: "Not Rated Yet"}
    end
  end

  def randomhouse
    @random_one = House.all.sample
    @random_two = House.all.sample
    @random_three = House.all.sample
    @randomhouses = [ @random_one, @random_two, @random_three]
    render json: @randomhouses
  end

  private 

    def house_params
      params.require(:house).permit(:house_name, :address, :city, :img, :avg_candy, :avg_scary, :file )
    end

    def set_house
      @house = House.find(params[:id])
    end
end
