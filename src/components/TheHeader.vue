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

<style scoped>
header {
  background-color: #2c2b2b;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px; 
}

ul {
  display: flex;
  flex-direction: row;
  gap: 60px;
  flex-wrap: nowrap;
}


p {
  color: white;
  font-size: 20px;
  white-space: nowrap;
  margin: 0px;
}


.logo {
  width: 100px;
  height: auto;
}

@media (max-width: 1200px) {
  ul {
    gap: 30px;
  }

  p {
    font-size: 15px;
  }
}

</style>
