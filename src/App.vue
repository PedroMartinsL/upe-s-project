<template>
  <div class="layout">
    <header>
      <TheHeader />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style>

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Roboto Condensed', sans-serif;
}

footer {
  background-color: #100e1d;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

header {
  background-color: #2c2b2b;
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

</style>