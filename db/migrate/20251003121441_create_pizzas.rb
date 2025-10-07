class CreatePizzas < ActiveRecord::Migration[8.0]
  def change
    create_table :pizzas do |t|
      t.string :nome
      t.decimal :preco

      t.timestamps
    end
  end
end
