<template>
  <div class="content">
    <h1>Notícias</h1>
    <ul v-if="hasNotice">
      <!-- o currentPageNews faz a leitura dinâmica da página atual -->
      <li v-for="news in currentPageNews" :key="news.id">
        <NewsComponent :news="news" />
      </li>
      <teleport to=".skip-block">  
        <div id="ui-skip">
          <button @click="lastPage">&lt;</button>
          <input type="number" v-model="pageIndex" />
          <button @click="nextPage">&gt;</button>
        </div>
      </teleport>
    </ul>
    <span v-else> Nenhuma notícia foi publicada ainda.</span>
  </div>
  <div class="skip-block"></div>
  <span v-if="error">{{ error }}</span>
</template>

<script>
import NewsComponent from "./NewsComponent.vue";
import { useNewsStore } from "@/store/news.js";

export default {
  data() {
    return {
      totalPerPage: 2,
      showNews: [],
      allNews: [],
      error: null,
      pageIndex: 1,
    };
  },
  methods: {
    loadNews() {
      const newsStore = useNewsStore(); // Acessando a store

      if (newsStore.error) {
        this.error = newsStore.error; 
      } else {
        this.allNews = newsStore.newsList; // Carrega as notícias da store
        this.loadRouteQuery(this.$route); // Filtra as notícias com base na rota
      }
    },
    loadRouteQuery(newRoute) {
      const query = newRoute.query?.search || "";

      if (newRoute) {
        const searchWords = query.split(" ");

        this.showNews = this.allNews.filter((newsItem) => {
          return searchWords.some((word) =>
            newsItem.title.toLowerCase().includes(word.toLowerCase())
          );
        });
      } else {
        this.showNews = this.allNews;
      }
    },
    nextPage() {
      if (this.pageIndex < this.totalPages) {
        this.pageIndex++;
      }
    },
    lastPage() {
      if (this.pageIndex > 1) {
        this.pageIndex--;
      }
    },
  },
  components: {
    NewsComponent,
  },
  computed: {
    hasNotice() {
      return this.showNews.length !== 0;
    },
    totalPages() {
      return Math.ceil(this.showNews.length / this.totalPerPage);
    },
    currentPageNews() {
      const startIndex = (this.pageIndex - 1) * this.totalPerPage;
      const endIndex = startIndex + this.totalPerPage;
      return this.showNews.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.loadNews();
  },
  watch: {
    $route(newRoute) {
      this.loadRouteQuery(newRoute);
    },
    pageIndex(valor) {
      if (valor >= 1 && valor <= this.totalPages) {
        return this.currentPageNews;
      } else {
        throw new Error("Índice de página inválido. Deve ser >= 1.");
      }
    },
  },
};
</script>

<style scoped>
.content {
  border: 1px solid rgb(205, 197, 197, 0.4);
  width: 80%;
  padding: 20px;
  margin-top: 20px;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  margin: 0;
  padding-inline-start: 0;
}

.skip-block {
  padding: 40px;

}

li {
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fdfdfd;
  transition: transform 0.2s linear;
}

li:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

div > button {
  margin: 0 5px;
  padding: 6px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

#ui-skip {
  display: flex;
  justify-content: center;
}

div > button:hover {
  background-color: #0056b3;
}

div > input[type="number"] {
  width: 50px;
  padding: 4px;
  margin: 0 5px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 6px;
}

h1 {
  line-height: 1;
  margin: 0 0 15px;
  font-size: 35px;
  color: #444444;
  unicode-bidi: isolate;
}

/* Remove spinners de seta do input no Chrome, Safari, Edge */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
