import axios from 'axios'
import store from '@/store'
import { getToken } from './auth'
import { errorStatus } from './variables'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true,
  timeout: 10000
})

// Toast提示，根据不同的ui库来
const errorHandler = error => {
  const status = error?.response?.status
  error.message = errorStatus[status] || '未知错误'
  return Promise.reject(error)
}

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.token = getToken()
    }
    config.cancelToken = store.getters.source.token
    return config
  },
  error => errorHandler(error)
)

service.interceptors.response.use(
  response => {
    const { data, config } = response
    if (config.responseType === 'blob') return data
    if (data.code >= 200 && data.code < 300) {
      return data.data
    }
    return Promise.reject(new Error(data.message || 'Error'))
  },
  error => {
    if (error instanceof axios.Cancel) return
    return errorHandler(error)
  }
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

// 捕获reject错误，使得Promise Catch不报错
window.addEventListener('unhandledrejection', event => event.preventDefault())
