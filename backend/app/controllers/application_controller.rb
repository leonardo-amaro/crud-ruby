class ApplicationController < ActionController::API
  before_action :authorize_request

  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    decoded = decode_token(header)
    @current_user = User.find(decoded[:user_id])
  rescue ActiveRecord::RecordNotFound, JWT::DecodeError
    render json: { errors: 'Acesso não autorizado' }, status: :unauthorized
  end

  private

  def decode_token(token)
    JWT.decode(token, Rails.application.secrets.secret_key_base.to_s)[0].symbolize_keys
  end
end
