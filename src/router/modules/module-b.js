const moduleB = () => import('@/views/module-b/index.vue')

export default [
  {
    path: '/moduleB',
    name: 'ModuleB',
    component: moduleB
  }
]
