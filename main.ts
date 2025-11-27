import { createApp } from 'vue'
// 创建应用实例的函数
import { createPinia } from 'pinia'
// 状态管理
import '@/assets/base.scss'
// 全局基础样式
import '@/assets/theme.scss'
// 全局主题样式
import App from './App.vue'
// 根组件
import router from './router'
// 路由
import "@/utils/extend"
// 工具函数扩展
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
