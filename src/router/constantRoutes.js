import home from '@/router/modules/home.js'
import my from '@/router/modules/my.js'
import qa from '@/router/modules/qa.js'
import video from '@/router/modules/video.js'

const Login = () => import('@/views/login/index.vue')
const Layout = () => import('@/views/layout/index.vue')

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [...home, ...my, ...qa, ...video]
  }
]
