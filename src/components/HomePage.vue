<template>
  <div class="content">
    <section id="highlights">
      <h1><strong>Destaques</strong></h1>
      <HighlightRoulette />
    </section>
    <section id="news">
      <div class="containerUI">
        <h2>Notícias</h2>
      </div>
    </section>
    <section id="course">
      <h1>Nossos cursos</h1>
      <CoursesHome />
    </section>
    <div class="containerUI">
      <h1>Corpo docente</h1>
      <section id="team">
        <TeatchersScroll :professor="{ name: 'Gus Frig' }" />
        <TeatchersScroll :professor="{ name: 'Heisenberg' }" />
      </section>
    </div>
    <section id="sourceUPE">
      <div class="containerUI">
        <h2>HISTÓRIA DA UPE</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Gd_EVZmcWfY?si=8aUit-GfwvLmA9VS"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  </div>
</template>

<script>
import HighlightRoulette from "./bodyComponents/HighlightRoulette.vue";
import CoursesHome from "./bodyComponents/CoursesHome.vue";
import TeatchersScroll from "./bodyComponents/TeatchersScroll.vue";

export default {
  components: {
    HighlightRoulette,
    CoursesHome,
    TeatchersScroll,
  },
};
</script>

<style scoped>
#team {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

h1 {
  color: #ed1c24;
  font-family: "Roboto", Sans-serif;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
}
</style>
