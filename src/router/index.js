import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/a',
      component: () => import('@/views/a.vue'),
      alias: '/c'
    },
    {
      path: '/c',
      name: 'c',
      component: () => import('@/views/c.vue'),
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: () => import('@/views/user.vue')
    }
  ]
})

export default router
