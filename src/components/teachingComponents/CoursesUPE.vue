<template>
  <div class="containerUI" v-if="course">
    <h2>{{ course.nome }}</h2>
    <hr>
    <p>{{ course.sobre }}</p>

    <div class="accordion-container">
      <div class="accordion-bar">
        <h3>Docentes</h3>
      </div>
      <ul class="accordion-content">
        <li v-for="docente in course.docentes" :key="docente">{{ docente }}</li>
      </ul>
    </div>

    <div class="accordion-container">
      <div class="accordion-bar">
        <h3>Horários</h3>
      </div>
      <ul class="accordion-content">
        <li v-for="horario in course.horarios" :key="horario">{{ horario }}</li>
      </ul>
    </div>

    <div class="accordion-container">
      <div class="accordion-bar">
        <h3>Ementa</h3>
      </div>
      <ul class="accordion-content">
        <li v-for="ementa in course.ementa" :key="ementa">{{ ementa }}</li>
      </ul>
    </div>

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

<style scoped>
.accordion-container {
  margin-bottom: 15px;
  overflow: hidden;
}

.accordion-bar {
  background-color: #a02626;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}

.accordion-bar:hover {
  background-color: #6b2121;
}

.accordion-content {
  list-style-type: none;
  padding-left: 20px;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 2s ease, opacity 0.5s ease;
}

.accordion-container:hover .accordion-content {
  max-height: 500px;
  opacity: 1;
}

ul li {
  padding: 8px;
  background-color: #f4f4f4;
  border-radius: 5px;
  margin-bottom: 5px;
  font-size: 1rem;
}

hr {
  border: none;
  border-top: 2px solid black;
  margin: 20px 0;
}
</style>