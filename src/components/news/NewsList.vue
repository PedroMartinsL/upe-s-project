<template>
  <ul v-if="hasNotice">
    <li>
        <div class="newsBox">
            <NewsComponent :conteudo="conteudo"/>
        </div>
    </li>
    <li>
        <div class="newsBox">
            <NewsComponent :conteudo="conteudo"/>
        </div>
    </li>
    <li>
        <div class="newsBox">
            <NewsComponent :conteudo="conteudo"/>
        </div>
    </li>
  </ul>
  <span v-else> Nenhuma notícia foi publicada ainda.</span>
</template>

<script>
import NewsComponent from "./NewsComponent.vue";
import pet from "@/assets/newsImg/pet.png";

export default {
  data() {
    return {
      totalPerPage: 5,
      arrayOfNews: [],
        conteudo: {
            title: "Alunos da upe adotam o novo mascote do vuex",
            caminho: pet,
            published:"15:55 10/04", textBody:"Mascote em formato da casa do bob é a nova sensação da upe.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam debitis cupiditate architecto unde! Rerum cum animi vitae minima inventore blanditiis sapiente quas ab repudiandae, sed placeat, accusantium vel illo.",
        }
    };
  },
  components: {
    NewsComponent
  },
  computed: {
    hasNotice() {
        return true;
    }
  }
};
</script>

<style></style>
