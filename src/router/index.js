import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  // hash模式：createWebHashHistory，history模式：createWebHistory
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
      path: '/user',
      name: 'user',
      component: () => import('@/views/user.vue')
    },
    {
      path: '/backend',
      name: 'backend',
      component: () => import('@/views/backend.vue')
    }
  ]
})

export default router
