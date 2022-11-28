import Vue from 'vue'
import Vuex from 'vuex'

import login from '@/store/modules/login.js'
import getters from '@/store/getters.js'

// 全局注册 Vuex 状态管理模式。
Vue.use(Vuex)

// 实例化 Vuex 中的 Store 对象。
const store = new Vuex.Store({
  modules: {
    login
  },
  getters
})

export default store
