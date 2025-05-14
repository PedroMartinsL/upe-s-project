<template>
  <div class="layout">
    <header>
      <TheHeader />
      <!-- emitindo o active para o controle do botão -->
      <!-- recebendo o método do header -->
    </header>
    <SideBar />
    <main>
      <router-view></router-view>
    </main>

    <TheFooter />
  </div>
</template>

<script>
import { useNewsStore } from "@/store/news.js";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    TheFooter,
    TheHeader,
    SideBar,
  },
  created() {
    const newsStore = useNewsStore();
    newsStore.fetchNews();
  }
};
</script>

<style>
.containerUI {
  border: 1px solid rgb(205, 197, 197, 0.4);
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  box-shadow: 1px 1px 2px #d8dadb, 3px 3px 4px #d9dbdc, 6px 6px 8px #dadcdd,
    10px 10px 12px #dbddde, 15px 15px 18px #dddfe0, 20px 20px 24px #e0e2e3,
    30px 30px 32px #e4e6e7;
}

h2 {
  margin: 0 0 15px;
  font-size: 20px;
  color: #34404e;
  font-family: Roboto Condensed;
  font-size: 23px;
  font-weight: 400;
  margin-bottom: 10px;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Roboto Condensed", sans-serif;
}

header {
  background-color: #2c2b2b;
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
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
