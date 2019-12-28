<template>
<el-card>
    <bread-crumb slot="header">
        <template slot="title">账户信息</template>
    </bread-crumb>
    <div class="container">
        <el-row class="info" type="flex" justify="space-between">
            <div>
                <div class="avatar">
                    <img :src="userInfo.photo?userInfo.photo:defaultImg" alt="">
                    <el-upload action="#" :show-file-list='false' :http-request='uploadImg'><el-link type='primary'>更换头像</el-link></el-upload>
                </div>
                <div class="intro">
                    <div style="height:40px;line-height:40px;">{{userInfo.name}}</div>
                    <div style="height:40px;font-size:12px;color:#999;">{{userInfo.intro}}</div>
                </div>
            </div>
            <div>
                <el-link  type='primary'>修改</el-link>
            </div>
        </el-row>
        <el-row type="flex" style="margin-left:20px;height:80px;line-height:80px;font-size:14px;">
            <span style="width:5%;text-align:center">账号信息</span>
            <div style="border-bottom:1px solid #ccc;width:95%;margin-left:15px;">
            <span style="margin:0 20px;">头条号类型</span>
            <span style="margin:0 20px;">个人</span>
            </div>
        </el-row>
        <el-row type="flex" style="margin-left:14px;height:80px;line-height:80px;font-size:14px;">
            <div style="border-bottom:1px solid #ccc;margin-left:100px;width:95%;">
            <span style="margin:0 20px;">头条号ID</span>
            <span style="margin:0 20px;">{{userInfo.id}}</span>
            </div>
        </el-row>
        <el-row type="flex" style="margin-left:15px;height:80px;line-height:80px;font-size:14px;">
            <span style="width:5%;text-align:center;">登录方式</span>
            <div style="border-bottom:1px solid #ccc;width:95%;margin-left:20px;">
            <span style="margin:0 20px;">绑定手机</span>
            <span style="margin:0 20px;">{{userInfo.mobile}}</span>
            </div>
        </el-row>
        <el-row type="flex" justify="space-between" style="margin-left:6px;height:80px;line-height:80px;font-size:14px;">
            <div>
            <span style="margin-left:60px;">邮箱</span>
            <span style="margin-left:40px;">{{userInfo.email}}</span>
            </div>
            <div>
                <el-link type='primary'>修改邮箱</el-link>
            </div>
        </el-row>
    </div>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        name: '',
        intro: '',
        photo: '',
        email: '',
        mobile: ''
      },
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    // 获取用户基本信息
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(res => {
        this.userInfo = res.data
      })
    },
    // 上传修改头像
    uploadImg (params) {
      let data = new FormData()
      data.append('photo', params.file)
      this.$axios({
        url: '/user/photo',
        method: 'patch',
        data
      }).then(res => {
        console.log(res)

        this.userInfo.photo = res.data.photo
      })
    }
  },
  created () {
    this.getUserInfo()
  }

}
</script>

<style lang='less' scoped>
.container{
    margin:0 20px;
    .info{
        border-bottom:1px solid #ccc;
        margin-left:20px;
        width:100%;
        .avatar{
            width:60px;
            height:60px;
            margin-right:50px;
            margin-bottom:50px;
            float:left;
            img{
                width:100%;
                height:100%;
                border-radius:50%;
            }
        }
        .intro{
           height:80px;
           float:left ;
        }
    }
}
</style>
