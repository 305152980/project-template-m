import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from '@/store/modules/module-a.js'
import moduleB from '@/store/modules/module-b.js'
import getters from '@/store/getters.js'

// 全局注册 Vuex 状态管理模式。
Vue.use(Vuex)

// 实例化 Vuex 中的 Store 对象。
const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  },
  getters
})

export default store
