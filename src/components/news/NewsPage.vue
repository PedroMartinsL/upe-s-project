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
.content {
  border: 1px solid rgba(205, 197, 197, 0.4);
  width: 80%;
  max-width: 800px;
  padding: 30px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-size: 36px;
  color: #2a2377;
  font-weight: 600;
  margin-bottom: 10px;
}

img {
  align-self: center;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

span {
  color: #888;
  font-size: 14px;
}

p {
  font-size: 18px;
  line-height: 1.6;
  color: #444;
  white-space: pre-line;
}

.references {
  font-style: italic;
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  border-top: 1px solid #e0e0e0;
  padding-top: 10px;
}

</style>
