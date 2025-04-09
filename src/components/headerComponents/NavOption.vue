<template>
  <div class="nav-option">
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped>
.nav-option {
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 5px;
  transition: border-color 0.3s ease;
}

.nav-option:hover {
  border-color: white;
}
</style>
