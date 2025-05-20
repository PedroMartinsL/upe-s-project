<template>
  <div class="context-home">
    <div class="context-news" v-if="latestNews.length > 1">
      <!-- Carregar as 2 últimas notícias -->
      <a v-if="latestNews.length > 0" :href="'/news/' + latestNews[0].id">
        <div class="dual-new">
          <img :src="latestNews[0].imgPath" alt="Notícia 1" />
          <h1>{{ latestNews[0].title }}</h1>
          <h2>{{ latestNews[0].published }}</h2>
          <span>Leia Mais</span>
        </div>
      </a>

      <a v-if="latestNews.length > 1" :href="'/news/' + latestNews[1].id">
        <div class="dual-new">
          <img :src="latestNews[1].imgPath" alt="Notícia 2" />
          <h1>{{ latestNews[1].title }}</h1>
          <h2>{{ latestNews[1].published }}</h2>
          <span>Leia Mais</span>
        </div>
      </a>
    </div>
    <button><router-link to="/news">Novidades</router-link></button>
  </div>
</template>

<script>
import { useNewsStore } from "@/store/news.js";

export default {
  data() {
    return {
      latestNews: [],
    };
  },
  computed: {
    newsStore() {
      return useNewsStore(); // Acessa a store de notícias
    },
  },
  created() {
    this.loadLatestNews(); // Carrega as últimas notícias ao montar o componente
  },
  methods: {
    loadLatestNews() {
      const news = this.newsStore.newsList;
      if (news.length > 1) {
        this.latestNews = news.slice(0, 2); // Pega as duas primeiras notícias
      }
    },
  },
};
</script>

<style scoped>
.context-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.context-news {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.dual-new {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
}

.dual-new img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.dual-new h1,
.dual-new h2,
.dual-new span {
  position: relative;
  z-index: 2;
  margin: 0;
  padding: 0;
}

.dual-new::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  z-index: 1;
}

.dual-new h1,
.dual-new h2,
.dual-new span {
  position: absolute;
  left: 10px;
  color: white;
}

.dual-new h1 {
  bottom: 40px;
  font-size: 1.1em;
}

.dual-new h2 {
  bottom: 25px;
  font-size: 0.9em;
  color: #ccc;
}

.dual-new span {
  bottom: 10px;
  font-size: 0.8em;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
}

button {
  align-self: center;
  background-color: #d7263d;
  border: none;
  color: white;
  font-weight: bold;
  padding: 10px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
  width: 50%;
}

button a {
  color: white;
  text-decoration: none;
}
</style>
