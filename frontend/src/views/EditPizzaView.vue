<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '@/services/api'
import PizzaForm from '@/components/PizzaForm.vue'

const route = useRoute()
const router = useRouter()
const pizza = ref<{ id: number; nome: string; preco: number } | null>(null)
const carregando = ref(true)

onMounted(async () => {
  try {
    const res = await api.get(`/pizzas/${route.params.id}.json`)
    pizza.value = res.data
  } catch (e) {
    alert('Erro ao carregar pizza')
  } finally {
    carregando.value = false
  }
})

async function atualizarPizza(dados: { nome: string; preco: number }) {
  try {
    await api.put(`/pizzas/${route.params.id}.json`, { pizza: dados })
    alert('Pizza atualizada com sucesso!')
    router.push('/')
  } catch (e) {
    alert('Erro ao atualizar pizza')
  }
}
</script>

<template>
  <div>
    <h1>Editar Pizza</h1>
    <p v-if="carregando">Carregando...</p>
    <PizzaForm v-else :pizza="pizza" @submit="atualizarPizza" />
  </div>
</template>