const moduleC = () => import('@/views/module-c/index.vue')

export default [
  {
    path: '/moduleC',
    name: 'ModuleC',
    component: moduleC
  }
]
