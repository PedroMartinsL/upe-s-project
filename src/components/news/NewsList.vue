<template>
  <div class="content">
    <h1>Notícias</h1>
    <ul v-if="hasNotice">
      <li v-for="news in arrayOfNews" :key="news.id">
        <NewsComponent :news="news" />
      </li>
    </ul>
    <span v-else> Nenhuma notícia foi publicada ainda.</span>
  </div>
  <span v-if="error">{{ error }}</span>
</template>

<script>
import NewsComponent from "./NewsComponent.vue";
import axios from 'axios';

export default {
  data() {
    return {
      totalPerPage: 5,
      arrayOfNews: [],
      error: null
    };
  },
  methods: {
    loadNews() {
      axios
        .get(
          'https://vue-http-demo-2fdc2-default-rtdb.firebaseio.com/shelf.json'
        )
        .then((response) => {
          const data = response.data;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              title: data[id].title,
              textBody: data[id].textBody,
              references: data[id].references,
              overview: data[id].overview,
              published: data[id].published,
              imgPath: data[id].imgPath
            });
          }
          this.arrayOfNews = results;
          console.log(this.arrayOfNews);
        })
        .catch((error) => {
          console.log(error);
          this.error = 'Failed too fetch data - please try again later';
        });
    }
  },
  components: {
    NewsComponent
  },
  computed: {
    hasNotice() {
      return this.arrayOfNews.length != 0;
    }
  },
  mounted() {
    this.loadNews();
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
