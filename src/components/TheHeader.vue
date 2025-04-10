<template>
  <div class="header-content">
    <img class="logo" src="../assets/upe.png" alt="upe-logo" />
    <ul>
      <NavOption><p>Home</p></NavOption>
      <NavOption><p>Ensino</p></NavOption>
      <NavOption><p>Pesquisa e Extensão</p></NavOption>
      <NavOption><p>Contato</p></NavOption>
    </ul>
    <SearchBar></SearchBar>
  </div>
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
.header-content {
  display: flex;
  gap: 40px;
}

ul {
  display: flex;
  flex-direction: row;
  gap: 60px;
  flex-wrap: nowrap;
}


p {
  color: white;
  font-size: 25px;
  white-space: nowrap;
  margin: 0px;
}


.logo {
  width: 100px;
  height: auto;
}

@media (max-width: 1100px) {
  ul {
    gap: 30px;
  }

  p {
    font-size: 20px;
  }
}

@media (max-width: 1000px) {
  ul {
    display: none;
  }
  header {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  
}

</style>
