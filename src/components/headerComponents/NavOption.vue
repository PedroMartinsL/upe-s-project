<template>
  <div class="nav-option">
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/news">Notícias</router-link>
      </li>
      <li>
        <router-link to="/ensino">Ensino</router-link>
      </li>
      <li>
        <router-link to="/pesq-ext">Pesquisa e Extensão</router-link>
      </li>
      <li>
        <router-link to="/contato">Contato</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
a {
  color: white;
  font-size: 20px;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 5px;
  transition: border-color 0.3s ease;
}

a:hover {
  border-color: white;
  cursor: pointer;
}

a:active,
a.router-link-active {
  text-decoration: underline 1px;
  border-color: transparent;
}

ul {
  display: flex;
  flex-direction: row;
  gap: 60px;
  flex-wrap: nowrap;
}

@media (max-width: 1200px) {
  ul {
    gap: 30px;
  }
}

@media (max-width: 1100px) {
  ul {
    display: none;
  }
}
</style>
