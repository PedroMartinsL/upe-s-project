<template>
    <aside class="sidebar">
      <h3>PESQUISA</h3>
      <router-link to="/pesquisa/catalogo" active-class="active">Catálogo de Laboratórios</router-link>
      <router-link to="/pesquisa/programas" active-class="active">Programas</router-link>
      <router-link to="/pesquisa/sapiens" active-class="active">SAPIENS</router-link>
    </aside>
  </template>
  
  <style scoped>
  .sidebar {
    width: 300px;
    background-color: #f2f2f2;
    padding: 20px;
    min-height: 90vh; 
    /* Isso serve para se eu quiser esticar a barra cinza da minha sizebar para baixo*/
    height: 100%;
  }
  .sidebar h3 {
    font-weight: bold;
    margin-bottom: 30px;
  }
  .sidebar a {
    display: block;
    margin-bottom: 20px;
    text-decoration: none;
    color: blue;
  }
  .sidebar a.active {
    font-weight: bold;
    color: red;
  }
  </style>
  