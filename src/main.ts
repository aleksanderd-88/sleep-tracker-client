import '@/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/layouts/AppLayout.vue'
import router from '@/router'
import vue3GoogleLogin from 'vue3-google-login'
import { useAppStore } from './stores'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {})

useAppStore().initializeAPI()

app.mount('#app')
