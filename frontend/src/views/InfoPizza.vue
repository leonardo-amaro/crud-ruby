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
    <div class="text-gp">
      <h2>{{ pizza.nome }}</h2>
      <p>Preço: R$ {{ pizza.preco }}</p>
    </div>

    <div class="button-gp">
      <router-link :to="`/pizza/${pizza.id}/edit`" id="editar">
        Editar pizza
      </router-link>
  
      <button @click="removerPizza">Excluir pizza</button>
    </div>
  </div>

  <p v-else-if="erro">{{ erro }}</p>
  <p v-else>Carregando pizza...</p>
</template>

<style scoped>
.button-gp {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#editar {
  background-color: #9acd32;
  color: #000;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: medium;
  text-decoration: none;
  transition: background-color 300ms;
}

button {
  background-color: transparent;
  color: #ff6347;
  text-decoration: none;
  padding: 0.75rem;
  border: 1px solid #ff6347;
  border-radius: 8px;
  cursor: pointer;
}

#editar:hover {
  background-color: #afe73e;
  cursor: pointer;
}
</style>