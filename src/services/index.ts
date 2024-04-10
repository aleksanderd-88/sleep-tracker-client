import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  timeout: 120000
})

export default {
  google: {
    initialize: () => {
      return client.get('/google/one-tap/initialize')
    },
    user: {
      get: (params: { data: { credentials: string } }) => {
        return client.post('/google/user/get', params)
      }
    }
  },
  healthCheck: () => {
    return client.get('/health-check')
  }
}
