import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/global.scss'
import './permission'

// 全局插件
import log from '@plugin/log'
Vue.use(log)

// 全局过滤器
import filters from './filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
// 开启performance用于性能分析
Vue.config.performance = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
