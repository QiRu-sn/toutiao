<template>
<el-row class="headerContainer" type="flex" align="middle">
    <!-- 头部左侧企业名称区域 -->
    <el-col :span='12' class="left">
        <i @click='openOrcol'  :class="{'el-icon-s-unfold':collapse,'el-icon-s-fold':!collapse}"></i>
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
            <img :src="userInfo.photo?userInfo.photo:defaultImg" alt="">
            <!-- 右侧下拉菜单选项区域 -->
            <el-dropdown @command='clickDropdown'>
                    <span class="el-dropdown-link">{{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command='info'>个人信息</el-dropdown-item>
                        <el-dropdown-item command='git'>git地址</el-dropdown-item><hr/>
                        <el-dropdown-item command='logOut'>退出</el-dropdown-item>
                    </el-dropdown-menu>
            </el-dropdown>
        </el-row>
    </el-col>
</el-row>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/user.jpeg'),
      collapse: false// 默认左侧面板展开
    }
  },
  methods: {
    // 打开或关闭左侧折叠面板
    openOrcol () {
      this.collapse = !this.collapse
      // 触发事件去通知其他组件修改左侧面板折叠或打开
      eventBus.$emit('changeCollapse')
    },
    //  点击头部个人信息区域触发事件
    clickDropdown (command) {
      if (command === 'info') {

      } else if (command === 'git') {
        window.location.href = 'https://github.com/QiRu-sn/toutiao'
      } else if (command === 'logOut') {
        window.localStorage.removeItem('token')
        this.$router.push('/login')
      }
    },
    getUserInfo () {
      var token = window.localStorage.getItem('token')
      this.$axios({
        url: '/user/profile',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => {
        this.userInfo = res.data
      })
    }
  },
  //  加载个人信息
  created () {
    this.getUserInfo()
    eventBus.$on('updateUserInfo', () => {
      this.getUserInfo()
    })
  }
}
</script>

<style lang='less' scoped>
.headerContainer{
    height: 50px;
    background-color: #fff;
    padding-right: 10px;
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
