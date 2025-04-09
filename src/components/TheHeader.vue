<template>
  <header>
    <img class="logo" src="../assets/upe.png" alt="upe-logo" />
    <ul>
      <NavOption><p>Home</p></NavOption>
      <NavOption><p>Ensino</p></NavOption>
      <NavOption><p>Pesquisa e Extensão</p></NavOption>
      <NavOption><p>Contato</p></NavOption>
    </ul>
    <SearchBar></SearchBar>
  </header>
</template>

<script>
import NavOption from "./headerComponents/NavOption.vue";
import SearchBar from "./headerComponents/SearchBar.vue"
export default {
  components: {
    NavOption,
    SearchBar
  },
};
</script>

<style>
header {
  background-color: #2c2b2b;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* distribui melhor */
  padding: 0 20px; /* espaço interno nas laterais */
}

ul {
  display: flex;
  flex-direction: row;
  gap: 60px; /* reduzido para evitar quebra */
  flex-wrap: nowrap; /* impede quebra de linha */
}

p {
  color: white;
  font-size: 20px;
  white-space: nowrap; /* impede quebra dentro de um item */
}

p:hover {
  text-decoration: underline;
  cursor: pointer;
}


.logo {
  width: 100px;
  height: auto;
}

</style>
