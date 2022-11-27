import router from '@/router/index.js'

// 全局前置路由导航守卫。
router.beforeEach((to, from, next) => {
  next()
})

// 全局后置路由导航守卫。
router.afterEach(() => {})
