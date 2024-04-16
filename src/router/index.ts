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
      path: '/',
      name: 'logged-in',
      component: () => import('@/pages/LoggedInView.vue'),
      meta: {
        requiresAuth: true,
        title: 'Welcome back!'
      },
      children: [
        {
          path: 'my-sleep',
          name: 'my-sleep',
          component: () => import('@/pages/MySleepView.vue'),
          meta: {
            requiresAuth: true,
            title: 'My sleep'
          }
        }
      ]
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

router.beforeEach((to) => {
  const userData = localStorage.getItem('__user__')

  if ( userData ) {
    useUserStore().setUserData(JSON.parse(userData))
  }

  if ( to.meta.requiresAuth && userData )
    useUserStore().authenticateUser()

  if ( !to.meta.requiresAuth && userData ) {
    return { name: 'logged-in', replace: true }
  }
})

router.afterEach((to) => {
  setPageTitle(to.meta.title as string)
})

export default router
