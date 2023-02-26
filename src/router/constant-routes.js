const importFn = require.context('./modules/', false, /\.js$/)
let routerModuleList = []
importFn.keys().forEach(fliePath => {
  routerModuleList = [...routerModuleList, ...importFn(fliePath).default]
})

const layout = () => import('@/views/layout/index.vue')

export default [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [...routerModuleList]
  }
]
