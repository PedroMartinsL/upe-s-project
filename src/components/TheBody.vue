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
  padding-top: 80px;
  display: flex;
  flex-direction: column;
}

section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
