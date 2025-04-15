<template>
    <p>Formulário de notícias</p>
    <form @submit.prevent="postForm">
        <label for="title">Título da sua notícia</label>
        <input type="text" v-model.trim="enteredTitle">
        <label for="title">Resumo</label>
        <input type="text" v-model.trim="overview">
        <label for="title">Corpo do texto</label>
        <input type="textarea" v-model.trim="textBody">
        <label for="title">Imagem</label>
        <input type="file" @change="onFileChange" accept="image/*" />
        <button type="submit">Enviar</button>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            enteredTitle: "",
            content: ""
        }
    },
    methods: {
        async postForm() {
            const date = new Date();

            const dataFormatada = date.toLocaleDateString('pt-BR');
            try {
                await axios.post('https://vue-http-demo-2fdc2-default-rtdb.firebaseio.com/surveys.json', {
                    title: this.enteredTitle,
                    overview: this.overview,
                    textBody: this.textBody,
                    published: "Publicado em " + dataFormatada,
                    references: this.references
                });
                this.enteredTitle = "";
                this.content = "";
            } catch (err) {
                console.error("Erro ao enviar notícia:", err);
            }
        }
    }
}
</script>

<style></style>