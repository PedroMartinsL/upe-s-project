<template>
  <div class="header-content">
    <div id="menu-aside">
      <MenuHam />
    </div>
    <div class="header-right">
      <img class="logo" src="../assets/upe.png" alt="upe-logo" />
      <NavOption />
      <SearchBar />

      <!-- Gabriel botou o icone de login -->
      <router-link to="/login" class="login-icon" title="Login">
        <img src="@/assets/icons/user-icon.svg" alt="Login" />
      </router-link>
    </div>
  </div>
</template>


<script>
import NavOption from "./headerComponents/NavOption.vue";
import SearchBar from "./headerComponents/SearchBar.vue";
import MenuHam from "./headerComponents/MenuHam.vue"

export default {
  components: {
    NavOption,
    SearchBar,
    MenuHam
  },
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


</style>

