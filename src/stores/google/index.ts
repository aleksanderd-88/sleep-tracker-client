import { defineStore } from 'pinia'
import { ref } from 'vue'
import API from '@/services'
import { useUserStore } from '@/stores/user'

export const useGoogleStore = defineStore('google', () => {
  const response = ref<{
    clientId: string | null
  }>({
    clientId: null
  })

  const userStore = useUserStore()

  const initialize = async () => {
    try {
      const { data } = await API.google.initialize()
      response.value = { ...response.value, ...data }
    } catch (error) {
      console.log(`Error ==> ${error}`)
    }
  }

  const googleCredentialsLogin = async (credentials: string) => {
    try {
      const { data } = await API.google.user.get({ data: { credentials } })
      userStore.setUserData(data)
    } catch (error) {
      console.log(`Error ==> ${error}`)
    }
  }

  const googleOauth2Login = async (code: string) => {
    try {
      const { data } = await API.google.user.oauth2({ data: { code } })
      userStore.setUserData(data)
    } catch (error) {
      console.log(`Error ==> ${error}`)
    }
  }

  return {
    initialize,
    response,
    googleCredentialsLogin,
    googleOauth2Login
  }
})
