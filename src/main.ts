import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import { initDB } from './mock/initDB'
import './index.css'

initDB()

createApp(App)
  .use(router)
  .mount('#app')
