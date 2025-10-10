<script setup lang="ts">
import Cardapio from './components/Cardapio.vue';

</script>

<template>
  <h1>Pizzaria CRUD</h1>
  <main>
    <Cardapio />
  </main>
</template>

<style scoped>
h1 {
  padding: 1.75rem 4rem;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

main {
  background-color: #fdfdfd;
  width: 80%;
  margin: auto;
  padding: 1.75rem;
  border-radius: 16px;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.3);
}
</style>
