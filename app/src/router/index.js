import { createRouter, createWebHistory } from 'vue-router'
import HomePage    from '@/views/HomePage.vue'
import BoroughPage from '@/views/BoroughPage.vue'
import TypesPage   from '@/views/TypesPage.vue'
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/borough',
    name: 'Borough',
    component: BoroughPage,
  },
  {
    path: '/types',
    name: 'Types',
    component: TypesPage,
  },
]
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
 
export default router
 