<template>
  <div class="professorPerfil">
    <img :src="profile" alt="professor-foto">
    <h2>{{ professor.name }}</h2>
  </div>
</template>

<script>
export default {
  props: ['professor', 'profile']
}
</script>

<style scoped>
    img {
        height: 60px;
        border-radius: 50%;
        padding-left: 20px;
    }
</style>