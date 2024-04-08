import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/pages/StartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/pages/user/UserView.vue'),
      children: [
        {
          path: 'log-in',
          name: 'login',
          component: () => import('@/pages/user/UserLogin.vue')
        }
      ]
    }
  ]
})

export default router
