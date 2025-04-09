<template>
    <div class="search-wrapper">
      <input type="text" placeholder="Buscar" class="search" />
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        fill="gray" viewBox="0 0 16 16">
        <path
          d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001l3.85 3.85a1 1 0 001.415-1.415l-3.85-3.85zm-5.242.656a5 5 0 110-10 5 5 0 010 10z" />
      </svg>
    </div>
  </template>
  

<script></script>

<style scoped>
.search-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-end; 
  width: 100%;
  padding-right: 40px;
}

.search {
  border-radius: 50px;
  width: 250px; 
  padding: 8px 30px 8px 10px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.search-icon {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

</style>
