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
  <form @submit.prevent="createPizza">
    <div>
      <label>Nome:</label>
      <input v-model="pizza.nome" type="text" required />
    </div>

    <div>
      <label>Preço:</label>
      <input v-model.number="pizza.preco" type="number" required />
    </div>

    <button type="submit">Adicionar Pizza</button>
  </form>

  <p v-if="mensagem">{{ mensagem }}</p>
</template>
