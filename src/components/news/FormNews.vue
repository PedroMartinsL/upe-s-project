<template>

    <div class="containerUI">
        <h1>Formulário de notícias</h1>
        <form @submit.prevent="postForm">
            <label for="title">Título da sua notícia</label>
            <input type="text" v-model.trim="enteredTitle" id="title">
            <label for="overview">Resumo</label>
            <input type="text" v-model.trim="overview" id="overview">
            <label for="textBody">Corpo do texto</label>
            <textarea
                id="textBody"
                v-model.trim="textBody"
                rows="6"
                placeholder="Digite o conteúdo da sua notícia aqui..."
            ></textarea>
            <label for="references">Referências</label>
            <input type="text" v-model.trim="references" id="references">
            <label for="image">Imagem</label>
            <input type="file" @change="onFileChange" id="image" />
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            enteredTitle: "",
            overview: "",
            textBody: "",
            imageBase64: null
        }
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
            const dataFormatada = date.toLocaleDateString('pt-BR');

            try {
                await axios.post('https://vue-http-demo-2fdc2-default-rtdb.firebaseio.com/shelf.json', {
                    title: this.enteredTitle,
                    overview: this.overview,
                    textBody: this.textBody,
                    published: "Publicado em " + dataFormatada,
                    references: this.references,
                    imgPath: this.imageBase64
                });

                this.enteredTitle = "";
                this.overview = "";
                this.textBody = "";
                this.references = "";
                this.imageBase64 = null;
            } catch (err) {
                console.error("Erro ao enviar notícia:", err);
            }
        }
    }
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

h1 {
  color: #ed1c24;
  font-family: "Roboto", Sans-serif;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
}

</style>