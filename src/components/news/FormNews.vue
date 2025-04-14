<template>
    <p>Formulário de notícias</p>
    <form @submit.prevent="postForm">
        <label for="title">Título da sua notícia</label>
        <input type="text" v-model.trim="enteredTitle">
        <label for="title">Conteúdo</label>
        <input type="text" v-model.trim="content">
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
                    content: this.content,
                    published: "Publicado em " + dataFormatada,
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