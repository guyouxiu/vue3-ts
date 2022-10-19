import { createApp,createVNode } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// 导入路由
import router from "./router/index"

import { store, key } from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 统一导入el-icon图标
import * as Icons from '@element-plus/icons'

// 方法二
const Icon = (props: { icon: string }) => {
    const { icon } = props;
    return createVNode(Icons[icon as keyof typeof Icons]);
};
app.component('Icon', Icon);

app.use(store, key)
app.use(router)
app.use(ElementPlus)
app.mount('#app')



