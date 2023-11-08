class PublishmentsController < ApplicationController
  before_action :set_publishment, only: %i[ show update destroy ]

  # GET /publishments
  def index
    @publishments = Publishment.all

    Rails.logger.info "publishments: #{@publishments}"
    @publishments.each do |publishment|
      puts "publishment: #{publishment.title}"
    end

    render json: @publishments
  end

  # GET /publishments/1
  def show
    render json: @publishment
  end

  # POST /publishments
  def create
    @publishment = Publishment.new(publishment_params)

    if @publishment.save
      render json: @publishment, status: :created, location: @publishment
    else
      render json: @publishment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /publishments/1
  def update
    if @publishment.update(publishment_params)
      render json: @publishment
    else
      render json: @publishment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /publishments/1
  def destroy
    @publishment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_publishment
      @publishment = Publishment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def publishment_params
      params.require(:publishment).permit(:first_name, :last_name, :email)
    end
end
