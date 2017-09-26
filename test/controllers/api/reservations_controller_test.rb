require 'test_helper'

class Api::ReservationsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_reservations_create_url
    assert_response :success
  end

  test "should get index" do
    get api_reservations_index_url
    assert_response :success
  end

  test "should get destroy" do
    get api_reservations_destroy_url
    assert_response :success
  end

end
