<template>
  <figure class="actualNew" v-for="img in images" :key="img.alt">
    <img :src="img.source" :alt="img.alt" />
    <h1>{{ img.titulo }}</h1>
    <p>{{ img.paragrafo }}</p>
  </figure>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          source: require("@/assets/newsImage/ete.jpg"),
          alt: "ete-image",
          titulo: "Nova sede Surubim",
          paragrafo: "Lorem",
        },
        {
          source: require("@/assets/newsImage/sede.jpg"),
          alt: "sede-image",
          titulo: "Prédio da upe recife",
          paragrafo: "Lorem1",
        },
        {
          source: require("@/assets/newsImage/good.jpg"),
          alt: "good-view-image",
          titulo: "Uma foto caprichosa",
          paragrafo: "Lorem2",
        },
      ],
    };
  },
};

</script>

<style scoped>
h1 {
  font-size: 30px;
  color: whitesmoke;
  justify-content: center;
  background-color: rgb(209, 56, 56);
}

p {
  font-size: 20px;
  text-align: justify;
  padding: 20px 100px;
  background-color: rgb(176, 40, 40);
}
</style>
