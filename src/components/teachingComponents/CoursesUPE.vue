<template>
  <div v-if="course">
    <h2>{{ course.nome }}</h2>
    <p>{{ course.sobre }}</p>

    <h3>Docentes:</h3>
    <ul>
      <li v-for="docente in course.docentes" :key="docente">{{ docente }}</li>
    </ul>
    <ul>
      <li v-for="horario in course.horarios" :key="horario">{{ horario }}</li>
    </ul>
    <ul>
      <li v-for="ementa in course.ementa" :key="ementa">{{ ementa }}</li>
    </ul>
  </div>
  <div v-else>
    <p>Curso não encontrado.</p>
  </div>
</template>

<script>
import cursos from "@/assets/courses/cursos.json";

export default {
  name: "CoursesUPE",
  props: ["courseId"],
  data() {
    return {
      course: {
        nome: String,
        sobre: String,
        docentes: Array,
        horarios: Array,
        ementa: Array,
        route: String,
      },
    };
  },
  methods: {
    loadCourse() {
      const curso = cursos.find((c) => c.route === this.courseId);
      if (curso) {
        this.course = {
          nome: curso.nome,
          sobre: curso.sobre,
          docentes: curso.docentes,
          horarios: curso.horarios,
          ementa: curso.ementa,
          route: curso.route,
        };
      } else {
        this.course = null;
      }
    },
  },
  mounted() {
    this.loadCourse();
  },
};
</script>

<style></style>
