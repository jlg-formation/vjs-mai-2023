import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

import { fontawesome } from './fontawesome'

const app = createApp(App)

app.use(fontawesome, { xxx: true })
app.use(createPinia())
app.use(router)

app.mount('#app')
