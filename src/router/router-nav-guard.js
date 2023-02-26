import router from '@/router/index.js'

// 引入进度条。
import NProgress from 'nprogress'

// 引入进度条样式。
import 'nprogress/nprogress.css'

// 去除进度条右上角的小圆圈。
NProgress.configure({ showSpinner: false })

// 全局前置路由导航守卫。
router.beforeEach((to, from, next) => {
  next()
})

// 全局后置路由导航守卫。
router.afterEach(() => {})
