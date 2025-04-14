<template>
    <div class="box">
        <img :src="news.caminho" alt="pinia-image">
        <a href="/">
            <h2>{{ news.title }}</h2>
        </a>
        <span><i>{{ news.published }}</i></span>
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
}

img {
    max-height: 150px;
    max-width: 100px;
}

a {
    font-size: 50px;
    color: #3079ed;
    text-decoration: none;
}

span {
    font-size: 12px;
    color: gray;
}

p {
    font-size: 12pt;
    font-family: Roboto Condensed;
    color: #444444;
}

h2 {
    font-size: 23px;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 1.1;
}
</style>