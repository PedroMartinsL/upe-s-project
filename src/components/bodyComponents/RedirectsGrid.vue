<template>
  <div id="grid-news">
    <div class="redirect-panel blue"><a href="https://siga.upe.br/upe/index.jsp" target="_blank"> SIGA </a></div>
    <div class="redirect-panel red">
      <router-link to="/contato"> Contato </router-link>
    </div>
    <div class="redirect-panel green">
      <a href="/docs/calendario.pdf" target="_blank"> Calendario </a>
    </div>
    <div class="redirect-panel yellow">
      <router-link to="/alguma-rota"> Editais </router-link>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#grid-news {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 300px;
  height: 300px;
}

.redirect-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(65, 65, 65);
  font-weight: bold;
  font-size: 1.1em;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 5px;
}

a {
    color: aliceblue;
    text-decoration: none;
}

.redirect-panel:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.blue {
  background-color: rgb(84, 134, 148);
}
.red {
  background-color: rgb(169, 73, 73);
}
.green {
  background-color: rgb(48, 125, 74);
}
.yellow {
  background-color: rgb(198, 186, 26);
}
</style>
