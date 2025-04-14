<template>
  <ul v-if="hasNotice">
    <li v-for="news in arrayOfNews" :key="news.id">
      <div class="newsBox">
        <NewsComponent :news="news" />
      </div>
    </li>
  </ul>
  <span v-else> Nenhuma notícia foi publicada ainda.</span>
</template>

<script>
import NewsComponent from "./NewsComponent.vue";
import pet from "@/assets/newsImg/pet.png";
import axios from 'axios';

export default {
  data() {
    return {
      totalPerPage: 5,
      arrayOfNews: [],
      conteudo: {
        title: "Alunos da upe adotam o novo mascote do vuex",
        caminho: pet,
        published: "15:55 10/04", textBody: "Mascote em formato da casa do bob é a nova sensação da upe.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam debitis cupiditate architecto unde! Rerum cum animi vitae minima inventore blanditiis sapiente quas ab repudiandae, sed placeat, accusantium vel illo.",
      },
    };
  },
  methods: {
    loadNews() {
      axios
        .get(
          'https://vue-http-demo-2fdc2-default-rtdb.firebaseio.com/surveys.json'
        )
        .then((response) => {
          const data = response.data;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              title: data[id].title,
              content: data[id].content,
              published: data[id].published,
              caminho: pet
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

<style></style>
