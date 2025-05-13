<template>
  <button
    v-show="!isWide"
    class="hamburger hamburger--collapse"
    :class="{ 'is-active': this.$store.state.toggleSidebar }"
    type="button"
    @click="toggleSidebar"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isWide: window.innerWidth >= 1100,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isWide = window.innerWidth >= 1100;
    },
    toggleSidebar() {
      // nome da mutation da main para alteração da barra
      this.$store.commit('togglerBar')
    }
  },
};
</script>

<style scoped>

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
  margin-right: auto;
}

</style>
