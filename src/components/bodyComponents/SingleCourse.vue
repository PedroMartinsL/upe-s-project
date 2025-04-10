<template>
  <div class="unique">
    <img :src="source" :alt="alt" />
    <div class="infoContainer">
      <h1>{{ titulo }}</h1>
      <div class="desc">
        <p>{{ categoria }}</p>
        <p>{{ descricao }}</p>
        <p>Vagas: {{ vagas }}</p>
        <p>Formação: {{ formacao }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["course"],
  computed: {
    source() {
      return this.course.source;
    },
    alt() {
      return this.course.alt;
    },
    titulo() {
      return this.course.titulo;
    },
    categoria() {
      return this.course.categoria;
    },
    descricao() {
      return this.course.descricao;
    },
    vagas() {
      return this.course.vagas;
    },
    formacao() {
      return this.course.formacao;
    },
  },
};
</script>

<style scoped>
.unique {
  max-width: 300px;
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  text-align: center;
  border: 2px solid rgb(37, 37, 80);
}

.unique img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 1rem;
}

.desc {
  background-color: rgb(176, 176, 176);
  border-radius: 2px;
}

.infoContainer {
  background-color: rgb(203, 241, 241);
  border-radius: 2px;
  border: 1px solid black;
}
</style>
