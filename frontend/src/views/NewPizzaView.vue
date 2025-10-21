<script setup lang="ts">
import PizzaForm from '@/components/PizzaForm.vue';
import { useRouter } from 'vue-router';
import { api } from '@/services/api';

const router = useRouter()

async function criarPizza(dados: { nome: string; preco: number }) {
  try {
    await api.post('/pizzas.json', { pizza: dados })
    alert('Pizza criada com sucesso!')
    router.push('/')
  } catch (e: any) {
    alert('Erro ao criar pizza')
    console.error(`Erro: ${e.response?.data?.errors?.join(', ') || 'Falha ao criar pizza'}`)
  }
}
</script>

<template>
  <div>
    <h1>Nova Pizza</h1>
    <PizzaForm @submit="criarPizza" />
  </div>
</template>