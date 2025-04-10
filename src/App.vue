<template>
  <header>
    <TheHeader />
  </header>
  <main>
    <TheMain />
  </main>
  <footer>
    <TheFooter />
  </footer>
</template>

<script>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
};
</script>

<style>
footer {
  background-color: #100e1d;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
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
}
</style>
