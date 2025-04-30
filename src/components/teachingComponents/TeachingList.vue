<template>
    <div class="teaching-tab">
      <h1 id="campus-logo">Campus Surubim</h1>
      <ul>
        <li v-for="course in courses" :key="course.route">
          <router-link :to="courseLink(course)">
            {{ course.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import cursos from "@/assets/courses/cursos.json";
  
  export default {
    name: "TeachingTab",
    data() {
      return {
        courses: [],
      };
    },
    methods: {
      loadCourse() {
        try {
          this.courses = cursos.map((course) => ({
            name: course.nome,
            route: course.route,
          }));
        } catch (error) {
          console.error("Erro ao carregar os cursos:", error);
          this.courses = [];
        }
      },
  
      courseLink(course) {
        return { name: "course", params: { courseId: course.route } };
      },
    },
    mounted() {
      this.loadCourse();
    },
  };
  </script>
  
  <style scoped></style>
  