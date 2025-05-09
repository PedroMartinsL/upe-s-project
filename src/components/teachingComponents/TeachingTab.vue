<template>
  <div class="rede-ensino-container">
    <section class="intro">
      <h1>Conheça Nossa Rede de Ensino</h1>
      <h2>UPE Campus Surubim</h2>
      <p>
        A Universidade de Pernambuco - Campus Surubim oferece uma formação de
        excelência, conectada com as demandas regionais e voltada para o
        desenvolvimento social e econômico do Agreste Setentrional.
      </p>
    </section>

    <section class="cards">
      <div class="card">
        <h3>Cursos Oferecidos</h3>
        <p>Conheça nossos cursos de graduação e pós-graduação.</p>
        <router-link to="/ensino/cursos">Ver cursos</router-link>
      </div>

      <div class="card">
        <h3>Corpo Docente</h3>
        <p>
          Professores qualificados, engajados com ensino, pesquisa e extensão.
        </p>
        <router-link to="/ensino/professores">Conhecer equipe</router-link>
      </div>

      <div class="card">
        <h3>Infraestrutura</h3>
        <p>
          Ambientes modernos e preparados para o aprendizado prático e teórico.
        </p>
        <!-- Link opcional -->
      </div>
    </section>

    <!-- Mantém o roteamento das rotas filhas -->
  </div>
</template>

<style scoped>
.rede-ensino-container {
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f7f7f7;
}

.intro {
  text-align: center;
  margin-bottom: 40px;
}

.intro h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.intro h2 {
  font-size: 1.8rem;
  color: #0066cc;
  margin-bottom: 20px;
}

.intro p {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.card {
  background-color: white;
  padding: 20px;
  width: 280px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  margin-bottom: 15px;
}

.card a {
  text-decoration: none;
  color: #0066cc;
  font-weight: bold;
}
</style>
