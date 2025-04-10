<template>
    <div class="search-wrapper">
      <input type="text" placeholder="Buscar" class="search" />
    </div>
  </template>
  

<script></script>

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

@media (max-width: 1000px) {
  .search-wrapper {
    display: none;
  }
}

</style>
