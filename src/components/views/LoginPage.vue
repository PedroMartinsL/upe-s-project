<template>
  <div class="form-wrapper">
    <div class="primeira">
      <form class="form">
        <h1> Cadastrar </h1>

        <label>
          <span> Seu Email</span>
          <input type="email" name="email" />
        </label>

        <label>
          <span> Senha</span>
          <input type="password" name="password" />
        </label>

        <button class="submit" type="button">Cadastrar - Clique Aqui</button>
      </form>
    </div>

    <div class="segunda">
      <form class="form">
        <h1> Logar </h1>

        <label>
          <span> Seu Email</span>
          <input type="email" name="email" />
        </label>

        <label>
          <span> Senha</span>
          <input type="password" name="password" />
        </label>

        <button class="submit" type="button">Logar - Clique Aqui</button>
      </form>
    </div>
  </div>
</template>

<script setup>
// Por enquanto vazio
</script>

<style scoped>
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  margin-top: 80px;
  flex-wrap: wrap;
}

.primeira,
.segunda {
  background: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.4), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 25px;
  width: 500px;
  min-height: 320px;
}

input,
button {
  border: none;
  outline: none;
  background: none;
}

h1 {
  color: black;
  padding-top: 10px;
  font-size: 30px;
  text-align: center;
}

.form {
  padding: 50px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 1.2s ease-in-out;
}

label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}

label span {
  font-size: 14px;
  font-weight: 600;
  color: #505f75;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 16px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(109, 93, 93, 0.4);
  text-align: center;
  font-family: 'Nunito', sans-serif;
}

button {
  display: block;
  margin: 20px auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  background-color: blue;
  color: white;
  font-size: 15px;
  cursor: pointer;
}

button:hover {
  background-color: red;
}
</style>
