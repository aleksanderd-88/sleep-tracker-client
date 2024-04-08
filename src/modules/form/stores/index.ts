import { defineStore } from 'pinia'
import type { Input } from '@/modules/form/types'

export const useFormStore = defineStore('form', () => {
  const signupUser = (payload: Input) => {
    console.log('SIGN UP USER WITH CREDENTIALS ==>', payload)
  }

  const loginUser = (payload: Input) => {
    console.log('LOG IN USER WITH CREDENTIALS ==>', payload)
  }

  return {
    signupUser,
    loginUser
  }
})
