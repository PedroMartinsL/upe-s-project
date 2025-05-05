<template>
  <div class="search-wrapper">
    <input type="text" placeholder="Buscar" v-model="searchQuery" class="search" @keyup.enter="goToNews" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    goToNews() {
      this.$router.push({ path: "/news", query: { search: this.searchQuery } });
    },
  },
};
</script>

<style scoped>
.search-wrapper {
  display: flex;
  width: 200px;
  align-items: center;
}

.search {
  border-radius: 50px;
  width: 150px;
  padding: 8px 30px 8px 10px;
  border: 1px solid #ccc;
  font-size: 16px;
}

@media (max-width: 800px) {
  .search-wrapper {
    display: none;
  }
}
</style>
