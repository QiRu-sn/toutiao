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
                    <quill-editor v-model="formData.content" style="width:80%;height:400px;margin-left:100px;margin-bottom:50px;"></quill-editor>
                </div>
            </el-form-item>
            <el-form-item label="封面">
                <el-radio-group @change="changeType" style="margin-left:70px;" v-model="formData.cover.type">
                    <el-radio :label="1">单图</el-radio>
                    <el-radio :label="3">三图</el-radio>
                    <el-radio :label="0">无图</el-radio>
                    <el-radio :label="-1">自动</el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 封面组件 -->
            <coverImg :list="formData.cover.images" @selectOneImg='receiveImg'></coverImg>
            <el-form-item label="频道 :" prop="channel_id" >
                <el-select   placeholder="请选择" style="margin-left:50px;margin-bottom:30px;" v-model="formData.channel_id">
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
        channel_id: null
      },
      rules: {
        title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }, { max: 30, min: 5, message: '请输入文章标题为5-30字之间', trigger: 'blur' }],
        content: [{ required: true, message: '请输入文章内容', trigger: 'blur' }],
        channel_id: [{ required: true, message: '请选择频道', trigger: 'blur' }]

      }
    }
  },
  // 监听路径
  watch: {
    $route: function (to, from) {
      // 存在articleID则为修改
      if (to.params.articleID) {
        // 修改
      } else {
        // 发布
        this.formData = {
          title: '',
          content: '',
          cover: {
            type: 0,
            images: []
          },
          channel_id: null
        }
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
    // 获取文章内容
    getAritcles (draft) {
      // 手动校验
      this.$refs.myForm.validate(isOK => {
        if (isOK) {
          // 校验通过则调用接口发表文章
          // 根据articleID判断是修改文章还是发布文章
          let { articleID } = this.$route.params
          this.$axios({
            url: articleID ? `/articles/${articleID}` : '/articles',
            method: articleID ? 'put' : 'post',
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
    },
    // 通过ID获取文章数据
    getAritcleByID (articleID) {
      this.$axios({
        url: `/articles/${articleID}`
      }).then(res => {
        this.formData = res.data
      })
    },
    // 封面按钮改变事件
    changeType () {
      let img = this.formData.cover
      if (img.type === 0 || img.type === -1) {
        img.images = []
      } else if (img.type === 1) {
        img.images = ['']
      } else if (img.type === 3) {
        img.images = ['', '', '']
      }
    },
    receiveImg (url, index) {
      this.formData.cover.images = this.formData.cover.images.map((item, i) => {
        return i === index ? url : item
      })
    }

  },
  created () {
    this.getChannels()
    let { articleID } = this.$route.params
    articleID && this.getAritcleByID(articleID)
  }
}
</script>

<style lang='less' scoped>
</style>
