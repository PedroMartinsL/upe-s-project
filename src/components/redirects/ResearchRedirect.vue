<template>
  <div class="research-container">
    <SideResearch />
    <router-view />
  </div>
</template>

<script>
import SideResearch from '@/components/bodyComponents/SideResearch.vue'

export default {
  components: { SideResearch }
}
</script>

<style scoped>
.research-container {
  display: flex;
}
</style>
