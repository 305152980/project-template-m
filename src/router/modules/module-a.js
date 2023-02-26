const moduleA = () => import('@/views/module-a/index.vue')

export default [
  {
    path: '/moduleA',
    name: 'ModuleA',
    component: moduleA
  }
]
