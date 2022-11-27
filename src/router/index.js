import Vue from 'vue'
import VueRouter from 'vue-router'

import constantRoutes from '@/router/constantRoutes.js'

// 全局注册 VueRouter 路由模块。
Vue.use(VueRouter)

const createRouter = () =>
  new VueRouter({
    // 开启 history 模式需要服务端的支持。
    // mode: 'history',
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: constantRoutes
  })

// 创建一个 VueRouter 实例。
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
