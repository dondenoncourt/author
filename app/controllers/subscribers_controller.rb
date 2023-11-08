class SubscribersController < ApplicationController
  before_action :set_subscriber, only: %i[ show update destroy ]

  # GET /subscribers
  def index
    puts 'got here again'
    @subscribers = Subscriber.all

    puts "subscribers: #{@subscribers}"
    @subscribers.each do |subscriber|
      puts "subscriber: #{subscriber.first_name}"
    end

    render json: @subscribers
  end

  # GET /subscribers/1
  def show
    render json: @subscriber
  end

  # POST /subscribers
  def create
    Rails.logger.info "subscriber_params: #{subscriber_params}"
    @subscriber = Subscriber.new(subscriber_params)

    if @subscriber.save
      SubscriptionMailer.with(subscriber: @subscriber).confirmation(@subscriber).deliver_now
      render json: @subscriber, status: :created, location: @subscriber
    else
      render json: @subscriber.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /subscribers/1
  def update
    if @subscriber.update(subscriber_params)
      render json: @subscriber
    else
      render json: @subscriber.errors, status: :unprocessable_entity
    end
  end

  # DELETE /subscribers/1
  def destroy
    @subscriber.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_subscriber
      @subscriber = Subscriber.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def subscriber_params
      params.require(:subscriber).permit(:first_name, :last_name, :email)
    end
end
