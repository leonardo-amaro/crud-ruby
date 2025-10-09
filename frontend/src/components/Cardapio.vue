<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { api } from "@/services/api";

const pizzas = ref<{ id: number; nome: string; preco: number }[]>([]);

onMounted(async () => {
  const response = await api.get("/");
  pizzas.value = response.data;
});
</script>

<template>
  <div>
    <h1>Cardápio</h1>
    <ul>
      <li v-for="pizza in pizzas" :key="pizza.id">
        {{ pizza.nome }} — R$ {{ pizza.preco }}
      </li>
    </ul>
  </div>
</template>
