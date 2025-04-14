<template>
    <div class="box">
        <img :src="news.caminho" alt="pinia-image">
        <a href="/">{{ news.title }}</a>
        <span>{{ news.published }}</span>
        <p>{{ news.content }}</p>
    </div>

</template>

<script>
    export default {
        props: ['news'],
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