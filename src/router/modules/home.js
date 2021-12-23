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
    }
  ]
}

export default router
