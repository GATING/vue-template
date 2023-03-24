const router = {
  path: '/home',
  name: 'home',
  redirect: '/home/test',
  meta: { title: '首页' },
  component: () => import('@/views/home/index'),
  children: [
    {
      path: '/home/test',
      name: 'test',
      meta: { title: '测试页' },
      component: () => import('@/views/home/test')
    },
    {
      path: '/home/keep-alive1',
      name: 'keep-alive1',
      meta: { title: '缓存页' },
      component: () => import('@/views/home/keep-alive1')
    },
    {
      path: '/home/keep-alive2',
      name: 'keep-alive2',
      meta: { title: '缓存页' },
      component: () => import('@/views/home/keep-alive2')
    }
  ]
}

export default router
