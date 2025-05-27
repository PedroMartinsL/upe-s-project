<template>
  <div class="containerUI" v-if="userLogin">
  <!-- <div class="containerUI"> -->
    <h1>Formulário de notícias</h1>
    <form @submit.prevent="postForm">
      <label for="title">Título da sua notícia</label>
      <input type="text" v-model.trim="enteredTitle" id="title" />
      <label for="overview">Resumo</label>
      <input type="text" v-model.trim="overview" id="overview" />
      <label for="textBody">Corpo do texto</label>
      <textarea
        id="textBody"
        v-model.trim="textBody"
        rows="6"
        placeholder="Digite o conteúdo da sua notícia aqui..."
      ></textarea>
      <label for="references">Referências</label>
      <input type="text" v-model.trim="references" id="references" />
      <label for="image">Imagem</label>
      <input type="file" @change="onFileChange" id="image" ref="fileInput"/>
      <button type="submit">Enviar</button>
    </form>
  </div>
  <div v-else>
    <p>Você deve estar logado para submeter uma notícia, tente: <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      enteredTitle: "",
      overview: "",
      textBody: "",
      references: "",
      imageBase64: null,
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {
        this.imageBase64 = reader.result;
      };

      reader.readAsDataURL(file);
    },
    async postForm() {
      const date = new Date();
      const dataFormatada = date.toLocaleDateString("pt-BR");

      try {
        const DATABASE_URL = process.env.VUE_APP_DATABASE_URL;
        await axios.post(
          `${DATABASE_URL}/shelf.json`, //
          {
            title: this.enteredTitle,
            overview: this.overview,
            textBody: this.textBody,
            published: "Publicado em " + dataFormatada,
            references: this.references,
            imgPath: this.imageBase64,
            userLogin: this.userLogin
          }
        );

        this.enteredTitle = "";
        this.overview = "";
        this.textBody = "";
        this.references = "";
        this.$refs.fileInput.value = "";
      } catch (err) {
        console.error("Erro ao enviar notícia:", err);
      }
    },
  },
  computed: {
  userLogin() {
    return this.$store.state.userLogin;
  }
}
};
</script>

<style>
.containerUI {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

label {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

input[type="text"],
textarea,
input[type="file"] {
  padding: 12px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s;
}

input[type="text"]:focus,
textarea:focus {
  border-color: #ed1c24;
}

textarea {
  resize: vertical;
}

button[type="submit"] {
  padding: 12px;
  background-color: #ed1c24;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

button[type="submit"]:hover {
  background-color: #c5141b;
}

h1 {
  color: #ed1c24;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
}
</style>
