<script setup lang="ts">
</script>

<template>
  <header>
    <h1>Pizzaria CRUD</h1>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  padding: 1.75rem 4rem;
  text-align: center;
  & h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
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
