import axios from 'axios'
import { Notify } from 'vant'

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
    // 验证 token 是否已过期。
    // 如果过期，退出系统并跳转至登录页；如果未过期，将 token 设置进请求头。
    // ......
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器。
instance.interceptors.response.use(
  response => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      Notify({ type: 'danger', message: message })
      return Promise.reject(new Error(message))
    }
  },
  error => {
    // 在这里，如果后端响应给前端 token 已过期，则退出系统并跳转至登录页。
    // ......
    Notify({ type: 'danger', message: error.message })
    return Promise.reject(error)
  }
)

// 请求工具函数。
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
