import header from './home/header.vue'
import aside from './home/aside.vue'
import breadCrumb from '../components/common/bread-crumb.vue'
// 引入富文本编辑器
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 引入发表文章时封面插件
import coverImg from './publish/cover.vue'
import uploadCover from './publish/upload.vue'

export default {
  install (Vue) {
    Vue.component('headerCom', header)
    Vue.component('asideCom', aside)
    Vue.component('bread-crumb', breadCrumb)
    Vue.component('quill-editor', quillEditor)
    Vue.component('coverImg', coverImg)
    Vue.component('uploadCover', uploadCover)
  }
}
