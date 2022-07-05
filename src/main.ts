import { createApp } from 'vue'
import App from './App.vue'

// 清除普通的样式
import 'normalize.css'

// 导入清除公共眼样式的第三方插件
import '@/assets/styles/common.less'

// 导入路由
import router from '@/router'

import {createPinia} from 'pinia'

// 注册pinia
const pinia = createPinia()

// 挂载路由、挂载pinia
createApp(App).use(pinia).use(router).mount('#app')
