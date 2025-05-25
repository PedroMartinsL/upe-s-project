import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';


import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import NotFound from './components/NotFound.vue'
import NewsList from './components/news/NewsList.vue'
import NewsPage from './components/news/NewsPage.vue'
import FormNews from './components/news/FormNews.vue'
import LoginPage from './components/views/LoginPage.vue'
import CoursesUPE from './components/teachingComponents/CoursesUPE.vue'
import TeachingList from './components/teachingComponents/TeachingList.vue'
import TeachingRedirect from './components/redirects/TeachingRedirect.vue'
import NewsRedirect from './components/redirects/NewsRedirect.vue'
import TeachingTab from './components/teachingComponents/TeachingTab.vue'
import ContatoPage from './components/views/Contato.vue'
import ResearchHome from './components/research/ResearchHome.vue'
import ResearchCatalog from './components/research/ResearchCatalog.vue'
import ResearchPrograms from './components/research/ResearchPrograms.vue'
import ResearchSapiens from './components/research/ResearchSapiens.vue'
import ProfessoresHome from './components/teachingComponents/ProfessoresHome.vue'
import ResearchRedirect from './components/redirects/ResearchRedirect.vue';



const store = createStore({
  state() {
    return {
      toggleSidebar: false,
      userLogin: null,
    };
  },
  mutations: {
    togglerBar(state) {
      state.toggleSidebar = !state.toggleSidebar;
    },
    setSidebarState(state, newState) {
      state.toggleSidebar = newState;
    },
    setUserLogin(state, userData) {
      state.userLogin = userData;
    },
    clearUserLogin(state) {
      state.userLogin = null;
    }
  },
  actions: {
    checkWindowSize({ state, commit }) {
      const windowWidth = window.innerWidth;
      // Se a largura for maior que 1100px, a sidebar deve ser fechada
      if (windowWidth > 1100 && state.toggleSidebar) {
        commit('setSidebarState', false);
      }
    }
  }
});


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      name: 'home',
      path: '/home',
      components: {
        default: HomePage
      }
    },
    {
      name: 'news',
      path: '/news',
      components: {
        default: NewsRedirect
      },
      children: [
        { name: 'list-news', path: '', component: NewsList, props: true},
        { name: 'form-nav', path: 'submit', component: FormNews, props: true },
        { name: 'news-page', path: ':id', component: NewsPage, props: true },
      ]
    },
    
    {
      path: '/contato',
      name: 'Contato',
      component: ContatoPage
    },
    
    {
      name: 'ensino',
      path: '/ensino',
      components: {
        default: TeachingRedirect
      },
      children: [
        {name: 'tab', path: '', component: TeachingTab, props: true },
        { name: 'cursos', path: 'cursos', component: TeachingList, props: true },
        { name: 'course', path: 'cursos/:courseId', component: CoursesUPE, props: true },
        { name: 'professores', path: 'professores', component: ProfessoresHome }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage 
    },

    {
      path: '/pesquisa',
      component: ResearchRedirect,
      children: [
        { path: '', component: ResearchHome, name: 'research' },
        { path: 'catalogo', component: ResearchCatalog, name: 'catalogo' },
        { path: 'programas', component: ResearchPrograms, name: 'programas' },
        { path: 'sapiens', component: ResearchSapiens, name: 'sapiens' }
      ]
    },
    { path: '/:notFound(.*)', component: NotFound }

    
  ]
})



const app = createApp(App)

app.use(router);
app.use(store);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);

app.mount('#app')
