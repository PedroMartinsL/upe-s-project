<template>
  <div class="carousel-background">
    <div class="carousel-container">
      <figure class="actualNew">
        <img :src="currentNew.source" :alt="currentNew.alt" />
      </figure>
      <h1>{{ currentNew.titulo }}</h1>
      <p>{{ currentNew.paragrafo }}</p>
      <div class="dots">
        <button
          v-for="(item, index) in news"
          :key="item.alt"
          :class="{ active: index === currentIndex }"
          @click="goToImage(index)"
        ></button>
      </div>
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
          titulo: "Nova sede Surubim",
          paragrafo: "Lorem",
        },
        {
          source: require("@/assets/highlights/sede.jpg"),
          alt: "sede-image",
          titulo: "Prédio da UPE Recife",
          paragrafo: "Lorem1",
        },
        {
          source: require("@/assets/highlights/good.jpg"),
          alt: "good-view-image",
          titulo: "Uma foto caprichosa",
          paragrafo: "Lorem2",
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
  text-align: center;
  background-color: #222;
  padding: 20px 300px;
  border-radius: 2%;
}

.actualNew img {
  
  object-fit: cover;
  border-radius: 10px;
}

h1 {
  font-size: 30px;
  color: whitesmoke;
  background-color: rgb(209, 56, 56);
  padding: 10px;
  margin: 0;
}

p {
  font-size: 20px;
  text-align: justify;
  padding: 20px 100px;
  background-color: rgb(176, 40, 40);
  color: white;
  margin: 0;
}

.dots {
  margin-top: 15px;
}

.dots button {
  height: 12px;
  width: 1px;
  margin: 0 5px;
  background-color: #bbb;
  border: none;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.dots button.active {
  background-color: #fff;
}
</style>
