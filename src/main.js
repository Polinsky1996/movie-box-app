import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import './assets/reset.css';


createApp(App).use(router).use(store).mount('#app')
