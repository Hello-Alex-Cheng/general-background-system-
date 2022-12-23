import { createApp, h } from 'vue'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局样式文件
import '@/assets/scss/index.scss'

// 导入 SvgIcon
import installIcons from '@/icons'

const app = createApp(App)

app.config.globalProperties.appName = 'alex.cheng'

// 注册全局组件
app.component('my-component', {
  render() {
    return h('button', '123')
  }
})

// 注册全局的 Icon 组件
installIcons(app)

app.use(ElementPlus)
app.use(router)

app.mount('#app')
