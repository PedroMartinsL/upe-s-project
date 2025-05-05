<template>
  <div class="content">
    <h1>Notícias</h1>
    <ul v-if="hasNotice">
      <li v-for="news in showNews" :key="news.id">
        <NewsComponent :news="news" />
      </li>
    </ul>
    <span v-else> Nenhuma notícia foi publicada ainda.</span>
  </div>
  <span v-if="error">{{ error }}</span>
</template>

<script>
import NewsComponent from "./NewsComponent.vue";
import axios from "axios";

export default {
  data() {
    return {
      totalPerPage: 5,
      showNews: [],
      allNews: [],
      error: null,
    };
  },
  methods: {
    async loadNews() {
      axios
        .get(
          "https://vue-http-demo-2fdc2-default-rtdb.firebaseio.com/shelf.json"
        )
        .then((response) => {
          const data = response.data;
          const results = [];

          const reversedKeys = Object.keys(data).reverse();

          for (const id of reversedKeys) {
            results.push({
              id: id,
              title: data[id].title,
              textBody: data[id].textBody,
              references: data[id].references,
              overview: data[id].overview,
              published: data[id].published,
              imgPath: data[id].imgPath,
            });
          }
          this.allNews = results;
          this.loadRouteQuery(this.$route);
        })
        .catch((error) => {
          console.log(error);
          this.error = "Failed too fetch data - please try again later";
        });
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
  },
  components: {
    NewsComponent,
  },
  computed: {
    hasNotice() {
      return this.showNews.length != 0;
    },
  },
  created() {
    this.loadNews();
  },
  watch: {
    $route(newRoute) {
      this.loadRouteQuery(newRoute);
    }
  }
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
h1 {
  line-height: 1;
  margin: 0 0 15px;
  font-size: 35px;
  color: #444444;
  font-family: Roboto Condensed;

  unicode-bidi: isolate;
}
</style>
