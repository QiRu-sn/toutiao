import header from './home/header.vue'
import aside from './home/aside.vue'

export default {
  install (Vue) {
    Vue.component('headerCom', header)
    Vue.component('asideCom', aside)
  }
}
