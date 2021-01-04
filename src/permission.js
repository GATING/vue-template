import axios from 'axios'
import store from '@/store'
import router from './router'
import { getToken } from '@/utils/auth'

const whiteList = ['/login', '/404', '/401']

router.beforeEach(async (to, from, next) => {
  // 取消所有请求，可选
  const CancelToken = axios.CancelToken
  store.getters.source.cancel && store.getters.source.cancel()
  store.commit('app/SET_SOURCE', CancelToken.source())

  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const info = store.getters.info
      if (info) {
        next()
      } else {
        try {
          await store.dispatch('user/getInfo')
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/logout')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
router.afterEach(() => {})
