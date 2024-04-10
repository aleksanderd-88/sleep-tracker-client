import { defineStore } from 'pinia'
import API from '@/services'

export const useAppStore = defineStore('app', () => {
  const initializeAPI = async () => {
    try {
      await API.healthCheck()
    } catch (error) {
      console.log('Failed to initialize API')
    }
  }

  return {
    initializeAPI
  }
})
