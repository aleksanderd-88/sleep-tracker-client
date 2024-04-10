import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/pages/StartView.vue'
import { setPageTitle } from '@/middlewares/router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/pages/user/UserView.vue'),
      children: [
        {
          path: 'log-in',
          name: 'login',
          component: () => import('@/pages/user/UserLogin.vue'),
          meta: {
            title: 'Log in to continue'
          }
        },
        {
          path: 'sign-up',
          name: 'signup',
          component: () => import('@/pages/user/UserSignup.vue'),
          meta: {
            title: 'Sign up to continue'
          }
        }
      ]
    }
  ]
})

router.beforeEach(() => {
  const userData = localStorage.getItem('__user__')
  if (userData) useUserStore().setUser(JSON.parse(userData))
})

router.afterEach((to) => {
  setPageTitle(to.meta?.title as string)
})

export default router
