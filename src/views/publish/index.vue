<template>
    <el-card>
        <bread-crumb slot="header">
            <template slot="title">发布文章</template>
        </bread-crumb>
        <el-form style="margin-left:50px;margin-top:30px;" :model='formData' :rules='rules' ref="myForm">
            <el-form-item label="标题"  prop='title'>
                <el-input placeholder="文章名称" style="width:40%;margin-left:50px;" v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item label="内容"  prop='content' style="margin-top:50px">
                <div class="edit_container">
                    <!-- <quill-editor v-model="formData.content"
                        style="width:80%;height:400px;margin-left:100px;margin-bottom:50px;">
                    </quill-editor> -->
                    <el-input type="textarea" v-model="formData.content" style="width:80%;rows:50;margin-left:50px;margin-bottom:50px;"></el-input>
                </div>
            </el-form-item>
            <el-form-item label="封面">
                <el-radio-group style="margin-left:70px;" v-model="formData.cover.type">
                    <el-radio :label="1">单图</el-radio>
                    <el-radio :label="3">三图</el-radio>
                    <el-radio :label="0">无图</el-radio>
                    <el-radio :label="-1">自动</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="频道 :" prop="channel_id">
                <el-select  placeholder="请选择" style="margin-left:50px;margin-bottom:30px;" v-model="formData.channel_id">
                    <el-option v-for="item in channels" :key="item.id" :label='item.name' :value='item.id'></el-option>
                </el-select>
            </el-form-item>
            <el-form-item style="padding-left:100px;" >
                <el-button type="primary" @click='getAritcles()'>发表</el-button>
                <el-button  @click='getAritcles(true)'>存入草稿</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [],
      formData: {
        title: '',
        content: '',
        cover: {
          type: 0,
          images: []
        },
        channel_id: ''
      },
      rules: {
        title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }, { max: 30, min: 5, message: '请输入文章标题为5-30字之间', trigger: 'blur' }],
        content: [{ required: true, message: '请输入文章内容', trigger: 'blur' }],
        channel_id: [{ required: true, message: '请选择频道', trigger: 'blur' }]

      }
    }
  },
  methods: {
    //   获取频道列表
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        this.channels = res.data.channels
      })
    },
    getAritcles (draft) {
      // 手动校验
      this.$refs.myForm.validate(isOK => {
        if (isOK) {
          // 校验通过则调用接口发表文章
          this.$axios({
            url: '/articles',
            method: 'post',
            params: { draft },
            data: this.formData
          }).then(res => {
            this.$message({
              type: 'success',
              message: '保存成功'
            })
            // 发表成功跳转至文章列表页
            this.$router.push('/home/articles')
          })
        }
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style lang='less' scoped>
</style>
