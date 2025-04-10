import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import NotFound from './components/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/home' },
      {
        name: 'home',
        path: '/home',
        components: { 
            default: HomePage,
        },
      }, 
      { path: '/:notFound(.*)', component: NotFound },
    ]
  });
  
  const app = createApp(App);
  
  app.use(router);
  
  app.mount('#app');
