const home = () => import('@/views/home/index.vue')

export default [
  {
    path: '/home',
    name: 'Home',
    component: home
  }
]
