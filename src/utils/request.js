import axios from 'axios'
import store from '@/store'
import { getToken } from './auth'

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
    config.cancelToken = store.getters.source.token
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code >= 200 && res.code < 300) {
      return res.data
    } else {
      return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  error => {
    if (error instanceof axios.Cancel) return
    return Promise.reject(error)
  }
)

function ajax(type, url, data = {}) {
  return service({
    url,
    method: type,
    data
  })
}

export function post(url, data = {}) {
  return ajax('post', url, data)
}
export function put(url, data = {}) {
  return ajax('put', url, data)
}
export function del(url, data = {}) {
  return ajax('delete', url, data)
}
export function get(url, data = {}) {
  return service({
    url,
    method: 'get',
    params: data
  })
}
