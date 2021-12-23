import axios from 'axios'
import { Loading, Message } from 'element-ui'
import store from '@/store'
import { getToken } from './auth'
import { errorStatus } from './variables'

// 全局loading，这里以element-ui为例

let loadingNum = 0 // 在加载中的页面
let globalLoading = null
const setLoading = () => {
  loadingNum += 1
  if (loadingNum === 1) {
    globalLoading = Loading.service({
      target: '#app',
      background: 'rgba(0,0,0,0.5)',
      // 避免遮罩层级不够
      customClass: 'global-loading'
    })
  }
}
const deleteLoading = () => {
  loadingNum -= 1
  if (loadingNum === 0) {
    // 关闭loading
    globalLoading?.close()
    // 手动释放
    globalLoading = null
  }
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true,
  timeout: 10000
})

// Toast提示，根据不同的ui库来
const errorHandler = error => {
  deleteLoading()
  const status = error?.response?.status
  error.message = errorStatus[status] || '未知错误'
  Message.error(error.message)
  return Promise.reject(error)
}

service.interceptors.request.use(
  config => {
    const { loading } = config
    if (typeof loading === 'undefined' || loading === true) {
      setLoading()
    }
    if (store.getters.token) {
      config.headers.token = getToken()
    }
    return config
  },
  error => errorHandler(error)
)

service.interceptors.response.use(
  response => {
    const { data, config } = response
    const { loading, responseType } = config
    if (typeof loading === 'undefined' || loading === true) {
      deleteLoading()
    }
    if (responseType === 'blob') return data
    if (data.code >= 200 && data.code < 300) {
      return data.data
    }
    return Promise.reject(new Error(data.message || 'Error'))
  },
  error => errorHandler(error)
)

export function post(url, ...config) {
  return service.post(url, ...config)
}
export function put(url, ...config) {
  return service.put(url, ...config)
}
export function del(url, params, config) {
  return service.delete(url, {
    params,
    ...config
  })
}
export function get(url, params, config) {
  return service.get(url, {
    params,
    ...config
  })
}
