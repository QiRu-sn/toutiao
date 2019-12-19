import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import axios from 'axios'
import comIndex from './components/index.js'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(comIndex)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
