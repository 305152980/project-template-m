import Vue from 'vue'

// 导入 CSS 样式重置库。
import 'normalize.css'

// 导入动态的 rem 基准值。（设置 html 标签的字体大小。）
import 'amfe-flexible'

// 导入 Vant 组件库。
import Vant from 'vant'

// 导入 Vant 全局样式。
import 'vant/lib/index.css'

// 导入自定义公共样式。
import '@/assets/styles/index.scss'

// 导入自定义全局组件。
import Globals from '@/components/globals/index.js'

// 导入自定义公共组件。
import Commons from '@/components/commons/index.js'

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

// 注册自定义全局组件。
Vue.use(Globals)

// 注册自定义公共组件。
Vue.use(Commons)

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    // 挂载全局事件总线。
    Vue.prototype.$bus = this
  }
}).$mount('#app')
