import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reset.css'
import './static/iconfont/iconfont.css'
import './styles/main.scss'
createApp(App).use(store).use(router).mount('#app')
