<template>
    <div id="contact">
      <h1>Contato</h1>
      <ul>
        <li>Telefone: (81) 9 9488-4069</li>
        <li>E-mail: suporte@upe.br</li>
      </ul>
    </div>
    <div id="about">
      <h1>Sobre</h1>
      <ul class="icons">
        <li>
          <a href="https://www.upe.br/" class="iconsRef">
            <img src="../assets/upe-simple.png" alt="" class="iconAbout" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/upeoficial_/" class="iconsRef">
            <img
              src="../assets/insta.jpg"
              alt="insta-image"
              class="iconAbout"
            />
          </a>
        </li> 
      </ul>
    </div>
    <div id="local">
      <h1>Localização</h1>
    </div>
</template>

<script></script>

<style scoped>

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.iconAbout {
  width: 40px;
  height: auto;
  border-radius: 50%;
}

ul.icons {
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-items: center;
  gap: 15px;
}

ul {
  padding-inline-start: 0px;
}

</style>
