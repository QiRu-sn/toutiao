<template>
    <el-card>
        <bread-crumb slot="header">
            <template slot="title">发布文章</template>
        </bread-crumb>
        <el-form style="margin-left:50px;margin-top:30px;">
            <el-form-item label="标题">
                <el-input placeholder="文章名称" style="width:40%;margin-left:50px;margin-bottom:30px;"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <quill-editor style="width:80%;height:400px;margin-left:90px;margin-bottom:50px;"
                    v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
                </quill-editor>
            </el-form-item>
            <el-form-item label="封面">
                <el-radio-group style="margin-left:50px;">
                    <el-radio :label="0">单图</el-radio>
                    <el-radio :label="1">三图</el-radio>
                    <el-radio :label="2">无图</el-radio>
                    <el-radio :label="3">自动</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="频道 :">
                <el-select  placeholder="请选择" style="margin-left:50px;margin-bottom:30px;">
                    <el-option v-for="item in channels" :key="item.id" :label='item.name' :value='item.id'></el-option>
                </el-select>
            </el-form-item>
            <el-form-item style="padding-left:100px;" >
                <el-button type="primary">发表</el-button>
                <el-button>存入草稿</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
import { quillEditor } from 'vue-quill-editor' // 调用编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components: {
    quillEditor
  },
  data () {
    return {
      content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
      editorOption: {},
      channels: []
    }
  },
  methods: {
    onEditorReady (editor) { // 准备编辑器

    },
    onEditorBlur () {}, // 失去焦点事件
    onEditorFocus () {}, // 获得焦点事件
    onEditorChange () {}, // 内容改变事件
    //   获取频道列表
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        this.channels = res.data.channels
      })
    }
  },
  created () {
    this.getChannels()
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  }
}
</script>

<style lang='less' scoped>
</style>
