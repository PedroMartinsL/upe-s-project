<template>
  <div class="header-content">
    <div id="menu-aside">
      <MenuHam />
    </div>
    <div class="header-right">
      <img class="logo" src="../assets/upe.png" alt="upe-logo" />
      <NavOption />
      <SearchBar />
    </div>
  </div>
</template>

<script>
import NavOption from "./headerComponents/NavOption.vue";
import SearchBar from "./headerComponents/SearchBar.vue";
import MenuHam from "./headerComponents/MenuHam.vue"

export default {
  components: {
    NavOption,
    SearchBar,
    MenuHam
  },
};
</script>

<style scoped>
.header-content {
  display: flex;
  align-items: center; 
  padding: 0 20px;
}

#menu-aside {
  position: absolute; 
  left: 20px; 
}

.header-right {
  display: flex;
  gap: 40px;
  margin-left: auto; 
  margin-right: auto; 
}

.logo {
  width: 100px;
  height: auto;
}
</style>
