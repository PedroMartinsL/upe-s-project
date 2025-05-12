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
  padding: 1.5rem;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  cursor: default;
}

.unique:hover {
  transform: translateY(-5px);
}

.unique img {
  width: 250px;
  height: 200px;
  border-radius: 8px;
  margin-bottom: 1rem;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.infoContainer {
  background-color: rgba(37, 37, 80, 0.05);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.infoContainer h1 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #262166;
  font-weight: 600;
}

.desc p {
  margin: 0.3rem 0;
  font-size: 0.95rem;
  color: #333;
}

.desc p:first-child {
  font-weight: 600;
  color: #444;
}
</style>
