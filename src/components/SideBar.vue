<template>
  <transition name="fade-slide">
  <aside class="sidebar" v-if="this.$store.state.toggleSidebar">
    <ul>
      <li><router-link to="/">Início</router-link></li>
      <li><router-link to="/news">Notícias</router-link></li>
      <li><router-link to="/contato">Contato</router-link></li>
      <router-link to="/news/submit">
        <button id="submit-news">Submeter notícia</button>
      </router-link>
    </ul>
  </aside>
</transition>
</template>

<script>
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 100px;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #f1f1f1;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.close {
  background: none;
  border: none;
  font-size: 20px;
  float: right;
  cursor: pointer;
}

#submit-news {
  background-color: rgb(167, 38, 38);
  color: white;
  border-radius: 5px;
}

#submit-news:hover {
  cursor: pointer;
}

a {
  color: #444;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
</style>
