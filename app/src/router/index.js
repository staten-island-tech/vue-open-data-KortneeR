import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import RatOne from '@/views/RatOne.vue'
import RatTwo from '@/views/RatTwo.vue/'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/ratone',
      name: 'ratone',
      component:RatOne,
    },
    {
      path: '/rattwo',
      name: 'rattwo',
      component:RatTwo,
    },
  ],
})

export default router
