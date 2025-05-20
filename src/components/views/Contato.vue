<template>
    <div>
      <!-- Banner com título -->
      <section class="banner">
        <div class="banner-overlay">
          <h1>Entre em contato</h1>
        </div>
      </section>
  
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <router-link to="/home">Casa</router-link> › Contato
      </div>
  
      <!-- Mapa -->
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.964118453755!2d-35.96309262596845!3d-8.26388839177343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a8a4fc29ab1d55%3A0x2e74e3c4a9bdb6b4!2sUPE%20Caruaru%20-%20Universidade%20de%20Pernambuco!5e0!3m2!1spt-BR!2sbr!4v1716220556920!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
  
      <!-- Informações -->
      <div class="info-container">
        <h2>Informações</h2>
        <p><strong>Endereço:</strong> Av. Projetada 01, SN, Nova Caruaru, Caruaru - PE, CEP 55.014-908</p>
        <p><strong>Escolaridade:</strong> escolaridade.caruaru@upe.br</p>
        <p><strong>Recursos Humanos:</strong> rh.caruaru@upe.br</p>
  
        <h2>Contatos Coordenação do Campus</h2>
        <p><strong>Coordenação Acadêmica:</strong> coordenacao.caruaru@upe.br</p>
        <p><strong>Coordenação Acadêmica SI:</strong> coordenacao.sicaruaru@upe.br</p>
        <p><strong>Coordenação Acadêmica ADM:</strong> coord.administracao.caruaru@upe.br</p>
        <p><strong>Coordenação de Estágio:</strong> estagio.caruaru@upe.br</p>
  
        <h3 class="disponivel">DISPONÍVEL DAS 08:00 – 22:00</h3>
        <h1 class="telefone">81 3719-9448</h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContatoPage",
  };
  </script>
  
  <style scoped>
  /* Banner */
  .banner {
    height: 180px;
    background: linear-gradient(to bottom, #f7f7f7 0%, #ccc 50%, #f7f7f7 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .banner-overlay {
    width: 100%;
    text-align: center;
  }
  
  .banner h1 {
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
  
  /* Breadcrumb */
  .breadcrumb {
    font-size: 14px;
    margin: 15px 40px;
    color: #555;
  }
  
  .breadcrumb a {
    color: #0056b3;
    text-decoration: none;
  }
  
  .breadcrumb a:hover {
    text-decoration: underline;
  }
  
  /* Mapa */
  .map-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  
  /* Informações */
  .info-container {
    max-width: 800px;
    margin: auto;
    padding: 0 20px 40px;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  .info-container h2 {
    margin-top: 20px;
    color: #0d3b66;
    font-size: 20px;
  }
  
  .info-container p {
    margin: 6px 0;
    font-size: 15px;
  }
  
  .info-container strong {
    font-weight: 600;
  }
  
  .disponivel {
    text-align: center;
    font-size: 16px;
    color: #666;
    margin-top: 40px;
  }
  
  .telefone {
    text-align: center;
    font-size: 32px;
    color: #444;
    font-weight: bold;
  }
  </style>
  