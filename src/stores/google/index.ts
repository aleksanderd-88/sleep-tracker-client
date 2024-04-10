import { defineStore } from "pinia";
import { ref } from "vue";
import API from '@/services'

export const useGoogleStore = defineStore('google', () => {

  const response = ref({
    clientId: null
  })

  const initialize = async () => {
    try {
      const { data } = await API.google.initialize()
      response.value = { ...response.value, ...data }
    } catch (error) {
      console.log(`Error ==> ${ error }`);
    }
  }

  return {
    initialize,
    response
  }
})