<template>
    <p>Formulário de notícias</p>
    <form @submit.prevent="postForm">
        <label for="title">Título da sua notícia</label>
        <input type="text" v-model.trim="enteredTitle">
        <label for="title">Conteúdo</label>
        <input type="text" v-model.trim="enteredText">
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
            enteredText: ""
        }
    },
    methods: {
        postForm() {
            axios.post('https://vue-http-demo-2fdc2-default-rtdb.firebaseio.com/surveys.json', {
                title: this.enteredTitle,
                rating: this.enteredText,
            });
        }
    }
}
</script>

<style></style>