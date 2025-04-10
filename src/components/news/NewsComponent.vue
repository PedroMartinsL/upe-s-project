<template>
    <div class="box">
        <img :src="conteudo.caminho" alt="pinia-image">
        <a href="/">{{ conteudo.title }}</a>
        <span>{{ conteudo.published }}</span>
        <p>{{ conteudo.textBody }}</p>
    </div>

</template>

<script>
    export default {
        props: ['conteudo'],
        methods: {
            redirectNew() {

            }
        }
    }
</script>

<style scoped>
    .box {
        display: flex;
        flex-direction: column;
        background-color: azure;
        
    }

    img {
        max-height: 150px;
        max-width: 100px;
    }

    a {
        font-size: 50px;
        color: rgb(54, 113, 153);
    }
</style>