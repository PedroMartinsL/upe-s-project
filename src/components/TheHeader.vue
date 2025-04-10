<template>
  <div class="header-content">
    <img class="logo" src="../assets/upe.png" alt="upe-logo" />
    <NavOption />
    <SearchBar />
  </div>
</template>

<script>
import NavOption from "./headerComponents/NavOption.vue";
import SearchBar from "./headerComponents/SearchBar.vue";
export default {
  components: {
    NavOption,
    SearchBar,
  },
};
</script>

<style>
.header-content {
  display: flex;
  gap: 40px;
}

.logo {
  width: 100px;
  height: auto;
}


</style>
