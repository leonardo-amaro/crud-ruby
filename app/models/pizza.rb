class Pizza < ApplicationRecord
  validates :nome, presence: true
  validates :preco, numericality: { greater_than: 0 }
end
