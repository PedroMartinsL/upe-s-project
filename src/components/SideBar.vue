<template>
  <transition name="fade-slide">
  <aside class="sidebar" v-if="this.$store.state.toggleSidebar">
    <ul>
      <li><router-link to="/">Início</router-link></li>
      <li><router-link to="/news">Notícias</router-link></li>
      <li><router-link to="/ensino">Ensino</router-link></li>
      <li><router-link to="/pesq-ext">Pesquisa e Extensão</router-link></li>
      <li><router-link to="/contato">Contato</router-link></li>
      <router-link to="/news/submit">
        <button id="submit-news">Submeter notícia</button>
      </router-link>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </aside>
</transition>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('checkWindowSize'); // Chama a ação para verificar o tamanho da janela
    window.addEventListener('resize', this.handleResize); // Adiciona o listener de redimensionamento
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize); // Remove o listener quando o componente for destruído
  },
  methods: {
    handleResize() {
      this.$store.dispatch('checkWindowSize'); // Atualiza o estado da sidebar conforme a largura da janela
    }
  }
}
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
  padding: 20px 15px;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
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
  font-size: 1em;
  padding: 10px 15px;
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

#submit-news:hover {
  cursor: pointer;
}

a {
  color: #444;
}

.sidebar li {
  margin: 15px 0;
}

.sidebar li a {
  font-size: 1.1em;
  text-decoration: none;
  transition: color 0.3s ease;
}

.sidebar li a:hover {
  color: #121341;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
</style>
