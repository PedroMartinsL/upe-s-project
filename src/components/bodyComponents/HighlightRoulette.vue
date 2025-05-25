<template>
  <div class="carousel-background">
    <div class="carousel-container">
      <figure class="actualNew">
        <img :src="currentNew.source" :alt="currentNew.alt" />
      </figure>
      <h1>{{ currentNew.titulo }}</h1>
      <p>{{ currentNew.paragrafo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          source: require("@/assets/highlights/ete.jpg"),
          alt: "ete-image",
          titulo: "UPE: Surubim",
          paragrafo: "Nova sede em Surubim",
        },
        {
          source: require("@/assets/highlights/sede.jpg"),
          alt: "sede-image",
          titulo: "Prédio da UPE Recife",
          paragrafo: "UPE Recife",
        },
        {
          source: require("@/assets/highlights/good.jpg"),
          alt: "good-view-image",
          titulo: "Uma Foto Caprichosa",
          paragrafo: "Universidade de Pernambuco (UPE)",
        },
      ],
      currentIndex: 0,
      interval: null,
    };
  },
  computed: {
    currentNew() {
      if (!this.news || this.news.length === 0) {
        return { source: "", alt: "", titulo: "", paragrafo: "" };
      }
      return this.news[this.currentIndex];
    },
  },
  methods: {
    startImageRotation() {
      if (this.news.length === 0) return;

      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.news.length;
      }, 5000);
    },

    goToImage(index) {
      this.currentIndex = index;
      this.startImageRotation();
    },
  },
  mounted () {
    this.startImageRotation();
  }
};
</script>

<style scoped>
.carousel-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #222;
  padding: 20px 300px;
  border-radius: 2%;
  width: 300px;
  height: 350px;
  position: relative;
}

.actualNew img {
  width: 300px;
  height: 200px;
  object-fit: cover; 
  border-radius: 10px;
  display: block;
}


h1 {
  font-size: 25px;
  color: whitesmoke;
  background-color: rgb(209, 56, 56);
  padding: 10px;
  margin: 0;
}

p {
  font-size: 15px;
  text-align: justify;
  padding: 20px 100px;
  background-color: rgb(176, 40, 40);
  color: white;
  margin: 0;
}
</style>
