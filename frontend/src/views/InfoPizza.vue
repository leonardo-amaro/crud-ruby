<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '@/services/api'

interface Pizza {
  id: number
  nome: string
  preco: number
}

const route = useRoute()
const router = useRouter()
const pizza = ref<Pizza | null>(null)
const erro = ref('')

onMounted(async () => {
  const id = route.params.id

  try {
    const res = await api.get(`/pizzas/${id}.json`)
    pizza.value = res.data
  } catch (e: any) {
    erro.value = e.response?.data?.error || 'Erro ao carregar pizza'
    console.error("Erro na requisição: ", e)
  }
})

async function removerPizza() {
  const id = route.params.id

  try {
    const confirmado = confirm("Tem ceteza que deseja remover esta pizza?")
    if (!confirmado) return

    const res = await api.delete(`/pizzas/${id}.json`)
    console.log("Pizza removida:", res.data)

    router.push("/")
  } catch (e: any) {
    erro.value = e.response?.data?.error || 'Erro ao deletar pizza'
    console.error("Erro na requisição: ", e)
  }
}
</script>

<template>
  <div v-if="pizza">
    <h2>{{ pizza.nome }}</h2>
    <p>Preço: R$ {{ pizza.preco }}</p>
    <p>Editar pizza</p>
    <button @click="removerPizza">Excluir pizza</button>
  </div>

  <p v-else-if="erro">{{ erro }}</p>
  <p v-else>Carregando pizza...</p>
</template>
