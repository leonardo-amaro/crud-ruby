<script lang="ts" setup>
import { ref } from 'vue'
import { api } from '@/services/api'

interface Pizza {
  nome: string
  preco: number
}

const pizza = ref<Pizza>({ nome: '', preco: 0 })
const mensagem = ref('')

async function createPizza() {
  try {
    const res = await api.post('/pizzas.json', {
      pizza: pizza.value,
    })
    mensagem.value = `Pizza criada com sucesso: ${res.data.nome}`
    pizza.value = { nome: '', preco: 0 }
  } catch (error: any) {
    mensagem.value = `Erro: ${error.response?.data?.errors?.join(', ') || 'Falha ao criar'}`
  }
}
</script>

<template>
  <h1>Adicionar Pizza</h1>

  <form @submit.prevent="createPizza">
    <div class="campo-form">
      <label>Nome:</label>
      <input v-model="pizza.nome" type="text" required />
    </div>

    <div class="campo-form">
      <label>Preço:</label>
      <input v-model.number="pizza.preco" type="number" required />
    </div>

    <div class="campo-form">
      <button type="submit">Adicionar Pizza</button>
      <router-link to="/" id="cancelar">Cancelar</router-link>
    </div>
  </form>

  <p v-if="mensagem">{{ mensagem }}</p>
</template>

<style scoped>
h1 {
  margin-bottom: 2rem;
}

.campo-form {
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input {
  width: 100%;
  margin: 0 0.75rem;
  padding: 1.25rem 0.5rem;
}

button {
  background-color: #9acd32;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: medium;
  transition: background-color 300ms;
}

#cancelar {
  color: #ff6347;
  text-decoration: none;
  padding: 0.75rem;
  border: 1px solid #ff6347;
  border-radius: 8px;
}

button:hover {
  background-color: #afe73e;
  cursor: pointer;
}
</style>