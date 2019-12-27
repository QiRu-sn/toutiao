<template>
<el-card style="padding:0 50px;">
    <bread-crumb slot="header">
        <template slot="title">账户信息</template>
    </bread-crumb>
    <el-row type="flex" justify="space-between" style="border-bottom:1px solid #ccc;margin-left:20px;width:100%" >
        <div>
            <div style="width:60px;height:60px;margin-right:50px;margin-bottom:50px;float:left">
                <img style="width:100%;height:100%;border-radius:50%;" src="../../assets/img/avatar.jpg" alt="">
                <el-link type='primary'>更换头像</el-link>
            </div>
            <div style="height:80px;float:left">
                <div style="height:40px;line-height:40px;">你好</div>
                <div style="height:40px;font-size:12px;color:#999;">黑马头条简介</div>
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
    <el-row type="flex" style="margin-left:15px;height:80px;line-height:80px;font-size:14px;">
        <div style="border-bottom:1px solid #ccc;margin-left:100px;width:95%;">
        <span style="margin:0 20px;">头条号ID</span>
        <span style="margin:0 20px;">1</span>
        </div>
    </el-row>
    <el-row type="flex" style="margin-left:20px;height:80px;line-height:80px;font-size:14px;">
        <span style="width:5%;text-align:center;">登录方式</span>
        <div style="border-bottom:1px solid #ccc;width:95%;margin-left:20px;">
        <span style="margin:0 20px;">绑定手机</span>
        <span style="margin:0 20px;">13911111111</span>
        </div>
    </el-row>
    <el-row type="flex" justify="space-between" style="margin-left:10px;height:80px;line-height:80px;font-size:14px;">
        <div>
        <span style="margin-left:60px;">邮箱</span>
        <span style="margin-left:40px;">888@itcast.com</span>
        </div>
        <div>
            <el-link type='primary'>修改邮箱</el-link>
        </div>
    </el-row>
</el-card>
</template>

<script>
export default {

}
</script>

<style>
</style>
