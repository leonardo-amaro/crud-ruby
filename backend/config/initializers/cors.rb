Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # ou coloque o domínio do Vue
    resource '*', 
      headers: :any, 
      methods: %i[get post put patch delete options head]
  end
end
