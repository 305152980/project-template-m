import moduleA from '@/router/modules/moduleA.js'
import moduleB from '@/router/modules/moduleB.js'

const Login = () => import('@/views/login/index.vue')

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  ...moduleA,
  ...moduleB
]
