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

<style scoped>
.teaching-tab {
  background-color: #f4f4f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 40%;
  margin: 0 auto;
}

a {
  text-align: center;
}

#campus-logo {
  font-size: 2rem;
  font-weight: 700;
  color: #262166;
  text-align: center;
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin: 0.75rem 0;
}

ul li a {
  display: block;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  color: #262166;
  text-decoration: none;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s, transform 0.3s;
}

ul li a:hover {
  background-color: #262166;
  color: #fff;
  transform: translateX(10px);
}

ul li a:focus {
  outline: none;
  border: 2px solid #262166;
}
</style>
