<template>
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
</template>

<script>
export default {
  name: 'ResearchHome'
}
</script>

<style scoped>
.content {
  flex: 1;
  padding: 30px;
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
  margin-bottom: 30px;
}
</style>
