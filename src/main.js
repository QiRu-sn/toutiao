import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import axios from './utils/request'
import comIndex from './components/index.js'
import router from './permission'
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(comIndex)

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
