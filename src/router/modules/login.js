const router = {
  path: '/login',
  name: '/login',
  meta: {
    title: '登录'
  },
  component: () => import('@view/login')
}

export default router
