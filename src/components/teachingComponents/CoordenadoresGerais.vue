<template>
    <section>
      <h2>Coordenador Geral</h2>
      <ul>
        <li v-for="(coord, index) in coordenadores" :key="index">
          <strong>{{ coord.nome }}</strong>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CoordenadoresGerais',
    props: {
      coordenadores: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  h2 {
    color: #800000;
    margin-bottom: 10px;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    margin-bottom: 6px;
    padding: 6px;
    background: #f4f4f4;
    border-radius: 5px;
  }
  </style>
  