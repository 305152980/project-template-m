import Vue from 'vue'

// 导入 CSS 样式重置库。
import 'normalize.css'

// 加载动态的 rem 基准值。
import 'amfe-flexible'

// 加载 Vant 组件库。
import Vant from 'vant'
// 加载 Vant 全局样式。
import 'vant/lib/index.css'

// 导入自定义公共样式。
import '@/assets/styles/index.scss'

import App from './App.vue'

// 导入 VueRouter 模块。
import router from '@/router/index.js'
// 添加路由权限控制。
import '@/router/routerNavGuard.js'

// 导入 Vuex 模块。
import store from '@/store/index.js'

Vue.config.productionTip = false

// 注册 Vant 组件库。
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
