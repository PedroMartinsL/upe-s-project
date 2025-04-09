<template>
  <div class="content">
    <section id="news">
      <h1><strong>Notícias</strong></h1>
      <News />
    </section>
    <section id="course">
      <h1>Nossos cursos</h1>
      <CoursesHome />
    </section>
    <section id="team">
      <h1>Corpo docente</h1>
    </section>
  </div>
</template>

<script>
import News from "./bodyComponents/NewsRoulette.vue";
import CoursesHome from "./bodyComponents/CoursesHome.vue";
export default {
  components: {
    News,
    CoursesHome
  },
};
</script>

<style>
h1 {
  color: #ed1c24;
  font-family: "Roboto", Sans-serif;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
}

.content {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
}

section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
