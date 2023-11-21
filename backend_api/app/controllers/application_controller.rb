class ApplicationController < ActionController::API
protected

  def authenticate_token
    payload = JsonWebToken.decode(auth_token)
  rescue => ex
    puts "\n\n #{ex.message} \n\n\n"
  end

  def auth_token
    @auth_token ||= request.headers.fetch('Authorization', '').split(' ').last
  end
end
