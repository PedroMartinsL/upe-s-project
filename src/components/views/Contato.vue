<template>
    <div>
      <section class="banner">
        <div class="banner-overlay">
          <h1>Entre em contato</h1>
        </div>
      </section>
  
      <div class="breadcrumb">
        <router-link to="/home">Casa</router-link> › Contato
      </div>
  
      <!-- Mapa -->
      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4445.171407658694!2d-35.76324027446395!3d-7.834229485974291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7abdb5b3d683f9f%3A0xeb287f4fd2e44220!2sEscola%20T%C3%A9cnica%20Estadual%20Ant%C3%B4nio%20Arruda%20de%20Farias!5e0!3m2!1sen!2sbr!4v1748211700536!5m2!1sen!2sbr" 
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>

  
      <div class="info-container">
        <h2>Informações</h2>
        <p><strong>Endereço:</strong> Rua Antônio Heráclito do Rego, S/N - Centro, Surubim - PE; CEP: 55750-000</p>
        <p><strong>Escolaridade:</strong> escolaridade.caruaru@upe.br</p>
        <p><strong>Cursos oferecidos:</strong> Bacharelado em Sistemas de Informação e Engenharia de Software, cada um com 30 vagas.</p>
  
        <h2>Contatos Coordenação do Campus</h2>
        <p><strong>Coordenação Acadêmica:</strong> coordenacao.caruaru@upe.br</p>
        <p><strong>Coordenação Acadêmica SI:</strong> coordenacao.sicaruaru@upe.br</p>
        <p><strong>Coordenação Acadêmica ADM:</strong> coord.administracao.caruaru@upe.br</p>
  
        <h3 class="disponivel">DISPONÍVEL DAS 08:00 – 22:00</h3>
        <h1 class="telefone">(81) 99488-4069</h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContatoPage",
  };
  </script>
  
  <style scoped>
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
    color: rgb(56, 36, 238);
    font-size: 40px;
    font-weight: bold;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
  
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
  
  .map-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  
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
  