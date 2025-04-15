<template>
  <div class="header-content">
    <button
      class="hamburger hamburger--collapse"
      :class="{ 'is-active': isActive }"
      type="button"
      @click="$emit('toggle-aside')"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <img class="logo" src="../assets/upe.png" alt="upe-logo" />
    <NavOption />
    <SearchBar />
  </div>
</template>

<script>
import NavOption from "./headerComponents/NavOption.vue";
import SearchBar from "./headerComponents/SearchBar.vue";
export default {
  props: {
    isActive: Boolean
  },
  emits: ['toggle-aside'],
  components: {
    NavOption,
    SearchBar,
  }
}
</script>

<style scoped>

.header-content {
  display: flex;
  gap: 40px;
}

.hamburger .hamburger-inner,
.hamburger .hamburger-inner::before,
.hamburger .hamburger-inner::after {
  background-color: #ffffff;
  width: 25px;
  height: 3px;
  
}


.hamburger {
  z-index: 1000;
  position: relative;
}

@media (min-width: 1100px) {
  .hamburger .hamburger-inner {
    display: none;
  }
}

.logo {
  width: 100px;
  height: auto;
}


</style>
