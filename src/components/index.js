import header from './home/header.vue'
import aside from './home/aside.vue'
import breadCrumb from '../components/common/bread-crumb.vue'
// 引入富文本编辑器
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  install (Vue) {
    Vue.component('headerCom', header)
    Vue.component('asideCom', aside)
    Vue.component('bread-crumb', breadCrumb)
    Vue.component('quill-editor', quillEditor)
  }
}
