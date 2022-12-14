import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import CatalogPage from '@/pages/CatalogPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogPage,
  }
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
