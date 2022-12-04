import router from '@/router/index.js'
import store from '@/store/index.js'

const whileList = ['/login']

// 全局前置路由导航守卫。
router.beforeEach(async(to, from, next) => {
  if (store.getters.tokenInfo) {
    if (to.path === '/login') {
      // 跳转至主页。
      next('/')
    } else {
      if (!store.getters.userInfo) {
        await store.dispatch('login/queryUserInfo')
        // 在这里配置用户权限中的动态路由表。
        // ......
        next()
      } else {
        // 放行。
        next()
      }
    }
  } else {
    if (whileList.indexOf(to.path) > -1) {
      // 访问白名单中的页面，放行。
      next()
    } else {
      // 访问非白名单中的页面，跳转至登录页。
      next('/login')
    }
  }
})

// 全局后置路由导航守卫。
router.afterEach(() => {})
