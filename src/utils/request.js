import axios from 'axios'
import store from '@/store/index.js'
import router from '@/router/index.js'
import storage from '@/utils/storage.js'

const TIME_STAMP_KEY = 'TOUTIAO_TIME_STAMP'
const TokenTimeOut = 90 * 60 * 1000 // 定义 token 的过期时间，单位毫秒。（这个需要与后端约定。）

// 创建一个 Axios 实例。
const instance = axios.create({
  // npm run dev ==> /dev-api   npm run build ==> /prod-api
  baseURL: process.env.VUE_APP_BASE_API,
  // 请求的超时时间。
  timeout: 10000,
  // 设置请求头的参数。
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// 请求拦截器。
instance.interceptors.request.use(
  async config => {
    if (store.getters.tokenInfo) {
      if (isTokenTimeOut()) {
        // 退出登录。
        // ......
        // 跳转至登录页。
        router.push('/login')
        return Promise.reject(new Error('您的 token 已失效！'))
      }
      config.headers.Authorization = `Bearer ${store.getters.tokenInfo.token}`
      storage.setItem(TIME_STAMP_KEY, Date.now())
      return config
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器。
instance.interceptors.response.use(
  response => {
    const { data } = response.data
    return data
  },
  error => {
    // 在这里，如果后端响应给前端 token 已过期，则退出系统并跳转至登录页。
    // ......
    return Promise.reject(error)
  }
)

// 检查 token 是否过期。
function isTokenTimeOut() {
  return (Date.now() - parseInt(storage.getItem(TIME_STAMP_KEY))) > TokenTimeOut
}

// 请求工具函数。
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
