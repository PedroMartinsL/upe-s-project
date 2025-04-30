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
import TeachingTab from './components/TeachingTab.vue'
import CoursesUPE from './components/teachingComponents/CoursesUPE.vue'
import TeachingList from './components/teachingComponents/TeachingList.vue'

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
        { name: 'list-news', path: '', component: NewsList, props: true },
        { name: 'form-nav', path: 'submit', component: FormNews, props: true },
        { name: 'news-page', path: ':id', component: NewsPage, props: true },
      ]
    },
    {
      name: 'ensino',
      path: '/ensino',
      components: {
        default: TeachingTab
      },
      children: [
        { name: 'list-courses', path: '', component: TeachingList, props: true },
        { name: 'course', path: ':courseId', component: CoursesUPE, props: true },
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
