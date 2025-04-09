<template>
  <div class="content">
    <section id="news">
      <News />
    </section>
    <section id="course"></section>
    <section id="team"></section>
  </div>
</template>

<script>
import News from "./bodyComponents/NewsRoulette.vue";
export default {
  components: {
    News,
  },
};
</script>

<style>
.content {
  padding-top: 100px; /* igual à altura do header */
}
</style>
