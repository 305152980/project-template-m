import Vue from 'vue'
import App from './App.vue'

// 加载动态的 rem 基准值。
import 'amfe-flexible'

// 加载 Vant 组件库。
import Vant from 'vant'
// 加载 Vant 全局样式。
import 'vant/lib/index.css'

Vue.config.productionTip = false

// 注册 Vant 组件库。
Vue.use(Vant)

new Vue({
  render: h => h(App)
}).$mount('#app')
