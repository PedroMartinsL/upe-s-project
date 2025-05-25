<template>
  <div class="header-content">
    <div id="menu-aside">
      <MenuHam />
    </div>
    <div class="header-right">
      <img class="logo" src="../assets/upe.png" alt="upe-logo" />
      <NavOption />
      <SearchBar />

      <!-- Gabriel isso eh para se o usuário estiver logado -->
      <div v-if="user" class="user-info">
        <span class="user-email">👤 {{ user }}</span>
        <button class="logout-btn" @click="logout">Sair</button>
      </div>

      <!-- Gabriel isso eh o usuário NÃO estiver logado -->
      <router-link v-else to="/login" class="login-icon" title="Login">
        <img src="@/assets/icons/user-icon.svg" alt="Login" />
      </router-link>
    </div>
  </div>
</template>

<script>
import NavOption from "./headerComponents/NavOption.vue";
import SearchBar from "./headerComponents/SearchBar.vue";
import MenuHam from "./headerComponents/MenuHam.vue";
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  components: {
    NavOption,
    SearchBar,
    MenuHam
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.userLogin);

    const logout = () => {
      store.commit('setUserLogin', null);
    };

    return {
      user,
      logout
    };
  }
};
</script>

<style scoped>
.header-content {
  display: flex;
  align-items: center; 
  padding: 0 20px;
}

#menu-aside {
  position: absolute; 
  left: 20px; 
}

.header-right {
  display: flex;
  gap: 40px;
  margin-left: auto; 
  margin-right: auto; 
  align-items: center;
}

.logo {
  width: 100px;
  height: auto;
}

.login-icon {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.login-icon img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid white;
  padding: 4px;
  background-color: #262166;
  transition: transform 0.2s ease;
}

.login-icon img:hover {
  transform: scale(1.1);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-email {
  color: white;
  font-weight: bold;
}

.logout-btn {
  background-color: red;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: darkred;
}
</style>
