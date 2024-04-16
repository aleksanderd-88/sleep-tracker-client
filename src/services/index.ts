import axios from 'axios'
import { useUserStore } from '@/stores/user'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  timeout: 120000
})

client.interceptors.request.use(
  (req) => {
    if (useUserStore().currentUser?.token)
      req.headers.Authorization = useUserStore().currentUser?.token

    return req
  },
  (err) => {
    useUserStore().logoutUser()
    console.log('Error ==>', err)
  }
)

client.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response?.status === 401) {
      useUserStore().logoutUser()
    }
    console.log('Error ==>', err)
  }
)

export default {
  google: {
    initialize: () => {
      return client.get('/google/one-tap/initialize')
    },
    user: {
      get: (params: { data: { credentials: string } }) => {
        return client.post('/google/user/get', params)
      },
      oauth2: (params: { data: { code: string } }) => {
        return client.post('/google/oauth2/user/get', params)
      }
    }
  },
  healthCheck: () => {
    return client.get('/health-check')
  },
  user: {
    auth: () => {
      return client.get('/user/auth')
    }
  }
}
