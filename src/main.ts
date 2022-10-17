import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


// 导入路由
import router from "./router/index"

import { store, key } from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app =createApp(App)
app.use(store, key)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
