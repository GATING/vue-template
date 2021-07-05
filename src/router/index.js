import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
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
      },
      {
        path: '/login',
        name: 'login',
        meta: { title: '登录页' },
        component: () => import('@/views/login/index')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
