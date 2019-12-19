<template>
<el-row class="headerContainer" type="flex" align="middle">
    <!-- 头部左侧企业名称区域 -->
    <el-col :span='12' class="left">
        <i class="el-icon-s-unfold"></i>
        <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <!-- 右侧区域 -->
    <el-col :span='12' class="right">
        <el-row type="flex" justify="end" align="middle" class="rightCon">
            <!-- 右侧搜索框区域 -->
            <el-tooltip content="搜索" placement="bottom">
                <el-input style="width:188px; margin:0 20px;"
                    placeholder="请输入搜索的文章内容"
                    prefix-icon="el-icon-search">
                </el-input>
            </el-tooltip>
            <!-- 右侧消息提示区域 -->
            <el-tooltip style="margin-right:10px" content="消息" placement="bottom"><span>消息</span></el-tooltip>
            <!-- 右侧头像区域 -->
            <img src="../../assets/img/user.jpeg" alt="">
            <!-- 右侧下拉菜单选项区域 -->
            <el-dropdown>
                    <span class="el-dropdown-link">这就是最好的<i class="el-icon-arrow-down el-icon--right"></i></span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>git地址</el-dropdown-item><hr/>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
            </el-dropdown>
        </el-row>
    </el-col>
</el-row>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.headerContainer{
    height: 50px;
    background-color: #fff;
    .left{
        margin-left: 10px;
        i{
            font-size: 20px;
            font-weight: 400;
        }
        span{
            padding: 0 10px;
        }
    }
    .right{
        .rightCon{
            img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                margin-right: 10px;
                cursor: pointer;
            }
        }
    }
}
</style>
