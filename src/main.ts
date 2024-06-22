import './global.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { registerComponents } from './registerComponents'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

registerComponents(app)

app.mount('#app')
