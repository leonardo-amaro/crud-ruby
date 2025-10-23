class Api::V1::AuthController < ApplicationController
  require 'jwt'
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  # POST /api/v1/login
  def login
    user = User.find_by(email: params[:email])

    if user&.authenticate(params[:password])
      token = encode_token(user.id)
      render json: { token: token, user: { id: user.id, name: user.name, email: user.email } }
    else
      render json: { error: "Credenciais inválidas" }, status: :unauthorized
    end
  end

  private

  def encode_token(user_id)
    payload = { user_id: user_id, exp: 24.hours.from_now.to_i }
    JWT.encode(payload, SECRET_KEY)
  end
end
