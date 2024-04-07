import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/pages/StartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView
    }
  ]
})

export default router
