<template>
  <div v-if="currentNews" class="content">
    <h1>{{ currentNews.title }}</h1>
    <img :src="currentNews.imgPath" alt="imagem" />
    <span>{{ currentNews.published }}</span>
    <p>{{ currentNews.textBody }}</p>
    <span class="references">
        <p>{{ currentNews.references }}</p>
    </span>
    
  </div>
  <div v-else>
    <p>Carregando notícia...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      currentNews: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://vue-http-demo-2fdc2-default-rtdb.firebaseio.com/shelf.json"
      )
      .then((response) => {
        const data = response.data;
        if (data[this.id]) {
          this.currentNews = {
            id: this.id,
            title: data[this.id].title,
            textBody: data[this.id].textBody,
            overview: data[this.id].overview,
            published: data[this.id].published,
            imgPath: data[this.id].imgPath,
            references: data[this.id].references,
          };
        }
      })
      .catch((err) => {
        console.error("Erro ao carregar notícia:", err);
      });
  },
};
</script>

<style scoped>
h1 {
  margin: 0 0 20px 0;
  font-size: 35px;
  color: #444444;
  font-weight: 400;
  line-height: 1.1;
}

img {
  align-self: center;
  max-width: 300px;
}

.content {
    border: 1px solid rgb(205, 197, 197, 0.4);
    width: 80%;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
</style>
