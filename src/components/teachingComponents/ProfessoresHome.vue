<template>
    <div class="professores-container">
      <h1>Professores</h1>
  
      <ProfessoresList :professores="data.professores" />
      <CoordenadoresCurso :coordenadores="data.coordenadoresCurso" />
      <CoordenadoresGerais :coordenadores="data.coordenadoresGerais" />
    </div>
  </template>
  
  <script>
  import data from '@/data/professoresData.js'
  import ProfessoresList from './ProfessoresList.vue'
  import CoordenadoresCurso from './CoordenadoresCurso.vue'
  import CoordenadoresGerais from './CoordenadoresGerais.vue'
  
  export default {
    name: 'ProfessoresHome',
    components: {
      ProfessoresList,
      CoordenadoresCurso,
      CoordenadoresGerais
    },
    data() {
      return { data }
    }
  }
  </script>
  
  <style scoped>
  .professores-container {
    padding: 40px;
    max-width: 800px;
    margin: auto;
  }
  </style>
  