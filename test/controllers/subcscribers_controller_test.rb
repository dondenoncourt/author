require "test_helper"

class SubcscribersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @subcscriber = subcscribers(:one)
  end

  test "should get index" do
    get subcscribers_url, as: :json
    assert_response :success
  end

  test "should create subcscriber" do
    assert_difference("Subcscriber.count") do
      post subcscribers_url, params: { subcscriber: { email: @subcscriber.email, first_name: @subcscriber.first_name, last_name: @subcscriber.last_name } }, as: :json
    end

    assert_response :created
  end

  test "should show subcscriber" do
    get subcscriber_url(@subcscriber), as: :json
    assert_response :success
  end

  test "should update subcscriber" do
    patch subcscriber_url(@subcscriber), params: { subcscriber: { email: @subcscriber.email, first_name: @subcscriber.first_name, last_name: @subcscriber.last_name } }, as: :json
    assert_response :success
  end

  test "should destroy subcscriber" do
    assert_difference("Subcscriber.count", -1) do
      delete subcscriber_url(@subcscriber), as: :json
    end

    assert_response :no_content
  end
end
