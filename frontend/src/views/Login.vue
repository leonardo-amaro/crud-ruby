<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '@/services/api'

const email = ref('')
const password = ref('')
const erro = ref('')
const router = useRouter()

async function login() {
  try {
    const res = await api.post('/login', { email: email.value, password: password.value })
    localStorage.setItem('token', res.data.token)
    router.push('/')
  } catch (e: any) {
    erro.value = e.response?.data?.error || 'Erro ao autenticar'
  }
}
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>Email:</label>
      <input v-model="email" type="email" required />
      <label>Senha:</label>
      <input v-model="password" type="password" required />
      <button type="submit">Entrar</button>
    </form>
    <p v-if="erro">{{ erro }}</p>
  </div>
</template>
