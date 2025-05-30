import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp({
  render: () => h(App)
})

app.use(pinia)
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
  
