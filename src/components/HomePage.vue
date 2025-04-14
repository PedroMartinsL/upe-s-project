<template>
    <div class="content" >
      <section id="highlights">
        <h1><strong>Destaques</strong></h1>
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
import News from "./bodyComponents/HighlightRoulette.vue";
import CoursesHome from "./bodyComponents/CoursesHome.vue";
export default {
  components: {
    News,
    CoursesHome
  },
};
</script>

<style scoped>


h1 {
  color: #ed1c24;
  font-family: "Roboto", Sans-serif;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
}

</style>
