<script setup lang="ts">
import { ref, watch } from 'vue'

interface Pizza {
  id?: number
  nome: string
  preco: number
}

const props = defineProps<{
  pizza?: Pizza
}>()

const emit = defineEmits<{
  (e: 'submit', data: { nome: string; preco: number }): void
}>()

const nome = ref(props.pizza?.nome || '')
const preco = ref(props.pizza?.preco || 0)

// Atualiza valores caso as props mudem
watch(
  () => props.pizza,
  (novaPizza) => {
    if (novaPizza) {
      nome.value = novaPizza.nome
      preco.value = novaPizza.preco
    }
  },
  { immediate: true }
)

function handleSubmit() {
  emit('submit', { nome: nome.value, preco: preco.value })
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="campo-form">
      <label>Nome:</label>
      <input v-model="nome" type="text" required />
    </div>

    <div class="campo-form">
      <label>Preço:</label>
      <input v-model.number="preco" type="number" min="0" required />
    </div>

    <div class="campo-form">
      <button type="submit">Adicionar Pizza</button>
      <router-link to="/" id="cancelar">Cancelar</router-link>
    </div>
  </form>
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