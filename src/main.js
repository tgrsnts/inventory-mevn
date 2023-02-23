import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import '@/assets/assets/css/main.css'
import '@/assets/assets/css/plugins.css'

createApp(App).use(router).mount('#app')
