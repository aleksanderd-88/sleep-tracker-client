import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { User } from '../google/types'
import API from '@/services'

export const useUserStore = defineStore('user', () => {
  const response = ref<User | null>(null)

  const getUser = async (credentials: string) => {
    try {
      const { data } = await API.google.user.get({ data: { credentials } })
      response.value = Object.assign({}, data)
    } catch (error) {
      console.log(`Error ==> ${error}`)
    }
  }

  const currentUser = computed(() => response.value)

  return {
    getUser,
    currentUser
  }
})
