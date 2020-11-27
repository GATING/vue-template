import axios from 'axios'
import store from '@/store'
import { Toast, Notify } from 'vant'
import { getToken } from './auth'

function handleError(error) {
  Notify({
    type: 'danger',
    message: '当前网络不可用',
    duration: 1000 * 2
  })
  console.log(error)
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true,
  timeout: 10000
})
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['token'] = getToken()
    }
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '加载中...'
    })
    config.cancelToken = store.getters.source.token
    return config
  },
  error => {
    Toast.clear()
    handleError(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const { data, config } = response
    if (config.responseType === 'blob') return data
    Toast.clear()
    if (data.code >= 200 && data.code < 300) {
      return data.data
    } else {
      const message = data.message || 'Error'
      Notify({
        type: 'danger',
        message: message,
        duration: 1000 * 2
      })
      return Promise.reject(new Error(message))
    }
  },
  error => {
    Toast.clear()
    if (error instanceof axios.Cancel) return
    handleError(error)
    return Promise.reject(error)
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
