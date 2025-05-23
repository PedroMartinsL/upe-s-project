<template>
    <section id="highlights">
      <h1><strong>Destaques</strong></h1>
      <hr />
      <br />
      <HighlightRoulette />
    </section>
    <section id="news">
      <div class="containerUI">
        <h2>Notícias</h2>
        <div class="containerRow">
          <NewsHome />
          <RedirectsGrid />
        </div>
      </div>
    </section>
    <section id="course" class="course-section">
      <img :src="classLogo" alt="logo-turma" class="image-background" />
      <div class="course-content">
        <h1>Nossos cursos</h1>
        <CoursesHome />
      </div>
    </section>

    <section class="team">
      <!-- colocar o team em um componente -->
      <div class="containerUI">
        <h1>Corpo docente</h1>
        <div class="containerRow">
          <TeatchersScroll :professor="{ name: 'Gus Frig' }" />
          <TeatchersScroll :professor="{ name: 'Heisenberg' }" />
        </div>
      </div>
      <div class="containerUI">
        <h1>Coordenação</h1>
        <div class="containerRow">
          <TeatchersScroll :professor="{ name: 'John Snow' }" />
          <TeatchersScroll :professor="{ name: 'Sansa Stark' }" />
        </div>
      </div>
    </section>

    <section id="sourceUPE">
      <div class="containerUI">
        <h2>HISTÓRIA DA UPE</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Gd_EVZmcWfY?si=8aUit-GfwvLmA9VS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
</template>

<script>
import HighlightRoulette from "./bodyComponents/HighlightRoulette.vue";
import CoursesHome from "./bodyComponents/CoursesHome.vue";
import TeatchersScroll from "./bodyComponents/TeatchersScroll.vue";
import classLogo from "@/assets/highlights/class.jpg";
import RedirectsGrid from "./bodyComponents/RedirectsGrid.vue";
import NewsHome from "./bodyComponents/NewsHome.vue";

export default {
  data() {
    return {
      classLogo: classLogo,
    };
  },
  components: {
    HighlightRoulette,
    CoursesHome,
    TeatchersScroll,
    RedirectsGrid,
    NewsHome,
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
  color: #262166;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
}

.course-section {
  position: relative;
  height: 800px;
  width: 100%;
}

.image-background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  z-index: -1;
}

.containerRow {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.team {
  display: flex;
  flex-direction: row;
}
</style>
