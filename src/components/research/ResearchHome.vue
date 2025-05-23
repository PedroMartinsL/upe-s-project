<template>
    <div class="research-container">
      <aside class="sidebar">
        <h3>PESQUISA</h3>
        <router-link to="/pesquisa/catalogo" active-class="active">Catálogo de Laboratórios</router-link>
        <router-link to="/pesquisa/programas" active-class="active">Programas</router-link>
        <router-link to="/pesquisa/sapiens" active-class="active">SAPIENS</router-link>
      </aside>
  
      <main class="content">
        <h1>Pesquisa</h1>
        <p>
          Uma das divisões da Pró-Reitoria de Pós-Graduação, Pesquisa e Inovação (PROPEGI) é a Coordenação Geral de Pesquisa (CPQ),
          que possui a missão de auxiliar a PROPEGI no planejamento, proposição e implementação de políticas de pesquisa científica
          para UPE, colaborando para o desenvolvimento científico, tecnológico e social do Brasil.
        </p>
        <p>Alguns dos objetivos da CPQ são:</p>
        <ul>
          <li>
            Acompanhar e incentivar atividades de captação de recursos para apoio à pesquisa, assim como contribuir para a criação e regulamentação de convênios e cooperações científicas;
          </li>
          <li>
            Direcionar investimentos e recursos para novos programas de pesquisa e apoiar os já existentes;
          </li>
          <li>
            Coordenar e acompanhar projetos e relatórios cadastrados nas bases de dados da Universidade;
          </li>
          <li>
            Certificar Grupos de Pesquisa da UPE cadastrados no Diretório dos Grupos de Pesquisa (DGP) do CNPq, assim como avaliar e aprovar novas propostas de criação de grupos;
          </li>
          <li>
            Promover e apoiar encontros, simpósios, seminários e conferências que contribuam para fortalecer e divulgar atividades de pesquisa na UPE;
          </li>
          <li>
            Gerenciar editais de apoio à pesquisa em programas de pós-graduação stricto sensu da UPE e nos programas de iniciação científica para alunos de graduação e ensino médio.
          </li>
        </ul>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResearchHome'
  }
  </script>
  
  <style scoped>
  .research-container {
    display: flex;
    padding: 30px;
  }
  
  .sidebar {
    background-color: #f3f3f3;
    padding: 20px;
    width: 250px;
    margin-right: 30px;
    border-radius: 10px;
  }
  
  .sidebar h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #000;
  }
  
  .sidebar a {
    display: block;
    color: blue;
    margin-bottom: 10px;
    text-decoration: none;
  }
  
  .sidebar a.active {
    font-weight: bold;
    color: #ed1c24;
  }
  
  .content {
    flex: 1;
    color: #222;
  }
  
  h1 {
    font-size: 32px;
    color: #ed1c24;
    margin-bottom: 20px;
  }
  
  ul {
    padding-left: 20px;
    margin-top: 10px;
  }
  
  li {
    margin-bottom: 10px;
  }
  </style>
  