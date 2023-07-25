class SubcscribersController < ApplicationController
  before_action :set_subcscriber, only: %i[ show update destroy ]

  # GET /subcscribers
  def index
    @subcscribers = Subcscriber.all

    render json: @subcscribers
  end

  # GET /subcscribers/1
  def show
    render json: @subcscriber
  end

  # POST /subcscribers
  def create
    @subcscriber = Subcscriber.new(subcscriber_params)

    if @subcscriber.save
      render json: @subcscriber, status: :created, location: @subcscriber
    else
      render json: @subcscriber.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /subcscribers/1
  def update
    if @subcscriber.update(subcscriber_params)
      render json: @subcscriber
    else
      render json: @subcscriber.errors, status: :unprocessable_entity
    end
  end

  # DELETE /subcscribers/1
  def destroy
    @subcscriber.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_subcscriber
      @subcscriber = Subcscriber.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def subcscriber_params
      params.require(:subcscriber).permit(:first_name, :last_name, :email)
    end
end
