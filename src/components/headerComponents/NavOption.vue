<template>
  <div class="nav-option">
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/news">Notícias</router-link>
      </li>

      <!-- Dropdown Ensino -->
      <li class="dropdown">
        <span class="dropdown-title"><router-link to="/ensino">Ensino</router-link></span>
        <ul class="dropdown-menu">
          <li><router-link to="/ensino/cursos">Cursos</router-link></li>
          <li><router-link to="/ensino/professores">Professores</router-link></li>
        </ul>
      </li>

      <li>
        <router-link to="/pesquisa">Pesquisa e Extensão</router-link> 
        <!-- Preciso ver direiro essa parada da rotas -->
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

.nav-option{
  display: flex;
  align-items: center;
}

ul {
  display: flex;
  flex-direction: row;
  gap: 60px;
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Dropdown estilo */
.dropdown {
  position: relative;
}

.dropdown-title {
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 30px;
  display: none;
  background-color: #1e1e1e;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
  min-width: 150px;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}

.dropdown-menu li {
  list-style: none;
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
