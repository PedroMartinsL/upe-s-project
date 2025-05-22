<template>
    <div class="programas-container">
      <h1>Programas</h1>
  
      <p>
        A Coordenação Geral de Pesquisa da Pró-Reitoria de Pós-Graduação, Pesquisa e Inovação (PROPEGI)
        está responsável por gerenciar 06 (seis) programas principais, com finalidade de apoiar pesquisas
        desenvolvidas por docentes-pesquisadores da instituição junto com estudantes de pós-graduação,
        graduação e ensino médio. São eles:
      </p>
  
      <h3>a) Programas de Iniciação Científica e Tecnológica</h3>
      <p>
        A iniciação científica e tecnológica na UPE se desdobra em 03 (três) programas:
      </p>
      <ul>
        <li>Programa Institucional de Iniciação Científica (PIBIC)</li>
        <li>Programa Institucional de Iniciação em Desenvolvimento Tecnológico e Inovação (PIBITI)</li>
        <li>Programa Institucional de Iniciação Científica para o Ensino Médio (PIBIC-EM)</li>
      </ul>
      <p>
        Esses programas promovem o interesse pela pesquisa científica e tecnológica,
        envolvendo docentes, estudantes de graduação e ensino médio, com apoio do CNPq,
        FACEPE e PFA da UPE, além de permitir participação voluntária (sem bolsa).
      </p>
      <p>
        Acesse os <a href="http://www.upe.br/editais.html" target="_blank">Editais</a> para conferir as últimas publicações.
      </p>
  
      <h3>b) Programa de Auxílio para Projetos de Pesquisa (APQ)</h3>
      <p>
        Investimento em custeio para projetos de teses e dissertações de programas Stricto Sensu da UPE.
        Para participar, o proponente deve ser servidor da UPE e docente credenciado em programa aprovado pela CAPES.
        <br />
        Acesse os <a href="http://www.upe.br/editais.html" target="_blank">Editais</a> para conferir as últimas publicações.
      </p>
  
      <h3>c) Programa de Mobilidade Docente (AMQ)</h3>
      <p>
        Estimula colaborações nacionais e internacionais entre docentes de programas Stricto Sensu da UPE
        e pesquisadores de outras instituições. Regras similares ao APQ.
        <br />
        Acesse os <a href="http://www.upe.br/editais.html" target="_blank">Editais</a> para conferir as últimas publicações.
      </p>
  
      <h3>d) Programa de Auxílio para Qualificação Docente (AQD)</h3>
      <p>
        Apoio a docentes da UPE em atividades de qualificação profissional no nível de doutorado.
        <br />
        Acesse os <a href="http://www.upe.br/editais.html" target="_blank">Editais</a> para conferir as últimas publicações.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResearchPrograms'
  }
  </script>
  
  <style scoped>
  .programas-container {
    padding: 30px;
    max-width: 900px;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: #222;
  }
  
  h1 {
    font-size: 32px;
    color: #ed1c24;
    text-align: center;
    margin-bottom: 20px;
  }
  
  h3 {
    color: #2a2377;
    margin-top: 20px;
    font-size: 20px;
  }
  
  a {
    color: #1a0dab;
    text-decoration: underline;
  }
  
  ul {
    margin-left: 20px;
    list-style-type: disc;
  }
  </style>
  