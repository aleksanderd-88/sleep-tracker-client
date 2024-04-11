import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { User } from '../google/types'
import API from '@/services'

export const useUserStore = defineStore('user', () => {
  const response = ref<User | null>(null)

  const getUser = async (credentials: string) => {
    try {
      const { data } = await API.google.user.get({ data: { credentials } })
      setUserData(data)
    } catch (error) {
      console.log(`Error ==> ${error}`)
    }
  }

  const setUserData = (userData: User) => {
    response.value = Object.assign({}, userData)
    localStorage.setItem('__user__', JSON.stringify(response.value))
  }

  const currentUser = computed(() => response.value)

  return {
    getUser,
    currentUser,
    setUserData
  }
})
