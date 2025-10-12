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
  <div class="content">
    <h1>Cardápio</h1>

    <ul>
      <li v-for="pizza in pizzas" :key="pizza.id">
        <figure>
          <img src="/images/pizza_cartoon.jpg" alt="Imagem de {{ pizza.nome }}">
          <figcaption>
            <h3>{{ pizza.nome }}</h3>
            <h4>R$ {{ pizza.preco }}</h4>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>

  <router-link to="/new" id="add">Adicionar Pizza!</router-link>
</template>

<style scoped>
.content {
  margin-bottom: 2rem;
}

h1 {
  margin-bottom: 2rem;
}

ul {
  padding: 8px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;
}

figure {
  border: 1px solid #000;
  border-radius: 16px;
  transition: margin-top 300ms;
  overflow: clip;
}

figure:hover {
  cursor: pointer;
  margin-top: -8px;
}

img {
  max-width: 100%;
  height: auto;
}

figcaption {
  padding: 0.75rem;
}

h4 {
  text-align: right;
}

#add {
  background-color: #9acd32;
  color: #fdfdfd;
  text-decoration: none;
  font-size: medium;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
}
</style>