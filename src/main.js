import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import NotFound from './components/NotFound.vue'
import NewsList from './components/news/NewsList.vue'
import NewsPage from './components/news/NewsPage.vue'
import FormNews from './components/news/FormNews.vue'
import NewsTab from './components/NewsTab.vue'
import LoginPage from './components/views/LoginPage.vue'


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
        default: NewsTab
      },
      children: [
        { name: 'listOf', path: '', component: NewsList, props: true },
        { name: 'newPerId', path: ':id', component: NewsPage, props: true },
        { name: 'submit', path: 'submit', component: FormNews, props: true },
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

app.use(router)

app.mount('#app')
