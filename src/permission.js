import router from './router'
import { getToken } from '@/utils/auth'

const whiteList = ['/login', '/404', '/401']

router.beforeEach(async (to, from, next) => {
  console.log(to.path)
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
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
