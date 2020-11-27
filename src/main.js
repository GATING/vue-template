import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'

// 按需加载Antd
import initVant from './plugins/Vant'
import '@/styles/global.scss'
import './permission'

initVant(Vue)

Vue.config.productionTip = false
// 开启performance用于性能分析
Vue.config.performance = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
