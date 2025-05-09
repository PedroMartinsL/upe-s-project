<template>
  <footer>
    <div id="content-footer">
      <div id="contact">
        <h1>Contato</h1>
      <ul>
        <li>Telefone: (81) 9 9488-4069</li>
        <li>E-mail: suporte@upe.br</li>
      </ul>
    </div>
    <div id="about">
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
  </div>
    <div class="footer-span">
      <hr />
      <div class="footer-description">
        <h3>UPE Campus Surubim © 2025</h3>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
footer {
  background-color: #100e1d;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

#content-footer {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
}

#content-footer h1, #content-footer h3 {
  margin: 0;
}

ul {
  padding-inline-start: 0px;
  list-style-type: none;
}

ul.icons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.iconAbout {
  width: 40px;
  height: auto;
  border-radius: 50%;
}

.footer-span {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

.footer-description h3 {
  margin-top: 10px;
  font-size: 14px;
}
</style>
