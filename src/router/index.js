import Vue from 'vue'
import VueRouter from 'vue-router'
import { flatten } from 'lodash'
import Layout from '@/layout'
import ParentView from '@/views/ParentView'
Vue.use(VueRouter)

const rts = require.context('./modules', true, /\.js$/) // webpack引入方式
let pageRoutes = flatten(rts.keys().map(e => rts(e).default))

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: pageRoutes
  },
  {
    path: '/test',
    name: 'Test',
    component: Layout,

    meta: { title: '测试', icon: 'user' },
    children: [
      {
        path: 'testOne',
        name: 'TestOne',
        meta: { title: '测试1', icon: 'user' },
        component: ParentView,
        children: [
          {
            path: 'one',
            name: 'Testoneone',
            meta: { title: '测试1-1', icon: 'user' },
            component: resolve => require(['@/views/test/testOne/index'], resolve)
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
