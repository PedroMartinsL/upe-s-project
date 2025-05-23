<template>
    <section>
      <h2>Docentes</h2>
      <ul>
        <li v-for="(prof, index) in professores" :key="index">
          <strong>{{ prof.nome }}</strong> – {{ prof.disciplinas.join(', ') }}
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProfessoresList',
    props: {
      professores: {
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
  