<template>
<div>
    <div class="aside-logo">
        <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <el-menu router background-color='#353b4e' text-color='#adafb5' active-text-color='#ffd04b' style="border-right:none">
        <el-menu-item>
          <span slot="title" index='/home'>首页</span>
        </el-menu-item>
        <el-submenu index='1'>
            <template slot="title">
                <span>内容管理</span>
            </template>
            <el-menu-item index='/home/publish'>发布文章</el-menu-item>
            <el-menu-item index='/home/articles'>内容列表</el-menu-item>
            <el-menu-item index='/home/comment'>评论列表</el-menu-item>
            <el-menu-item index="/home/material">素材管理</el-menu-item>
        </el-submenu>
        <el-submenu index='2'>
            <template slot="title">
                <span>粉丝管理</span>
            </template>
            <el-menu-item index='/home/Graphic_data'>图文数据</el-menu-item>
            <el-menu-item index='/home/fans_profile'>粉丝概况</el-menu-item>
            <el-menu-item index='/home/fans_portrait'>粉丝画像</el-menu-item>
            <el-menu-item index='/home/fans_list'>粉丝列表</el-menu-item>
        </el-submenu>
        <el-menu-item>
            <span slot="title" index='/home/userInfo'>账户信息</span>
        </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .aside-logo{
    background-color:  #2e2f32;
    padding: 15px;
    text-align: center;
    img{
      width: 120px;
    }
  }
</style>
