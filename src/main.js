import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex';

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

const store = createStore({
  state() {
    return {
      toggleSidebar: false,
    };
  },
  mutations: {
    togglerBar(state) {
      state.toggleSidebar = !state.toggleSidebar;
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
      name: 'ensino',
      path: '/ensino',
      components: {
        default: TeachingRedirect
      },
      children: [
        {name: 'tab', path: '', component: TeachingTab, props: true },
        { name: 'cursos', path: 'cursos', component: TeachingList, props: true },
        { name: 'course', path: 'cursos/:courseId', component: CoursesUPE, props: true },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage 
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

const app = createApp(App)

app.use(router);
app.use(store);

app.mount('#app')
