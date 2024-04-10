import { defineStore } from "pinia";
import API from '@/services'

export const useAppStore = defineStore('app', () => {

  const initializeAPI = () => {
    try {
      API.healthCheck()
    } catch (error) {
      console.log(`Error ==> ${ error }`);
    }
  }

  return {
    initializeAPI
  }
})