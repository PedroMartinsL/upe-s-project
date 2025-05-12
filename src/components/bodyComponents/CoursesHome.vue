<template>
  <div class="singleCourse" v-if="coursesList.length != 0">
    <SingleCourse v-for="course in coursesList" :key="course.titulo" :course="course" />
  </div>
</template>

<script>
import esLogo from "@/assets/courses/es.png";
import siLogo from "@/assets/courses/si.png";

import SingleCourse from "./SingleCourse.vue";
export default {
  components: {
    SingleCourse
  },
  data() {
    return {
      coursesList: [
        {
          source: esLogo,
          alt: "logo engenharia de software",
          titulo: "Engenharia de Software",
          categoria: "Exatas",
          descricao: "O curso de Bacharelado de ES, iniciado em 2023",
          vagas: 30,
          formacao: "Bacharelado",
        },
        {
          source: siLogo,
          alt: "logo Sistemas de informação",
          titulo: "Sistemas de informação",
          categoria: "Exatas",
          descricao: "O curso de Bacharelado de SI, iniciado em 2023",
          vagas: 30,
          formacao: "Bacharelado",
        },
      ],
    };
  },
};
</script>

<style scoped>
.singleCourse {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

</style>
