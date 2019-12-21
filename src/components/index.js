import header from './home/header.vue'
import aside from './home/aside.vue'
import breadCrumb from '../components/common/bread-crumb.vue'

export default {
  install (Vue) {
    Vue.component('headerCom', header)
    Vue.component('asideCom', aside)
    Vue.component('bread-crumb', breadCrumb)
  }
}
