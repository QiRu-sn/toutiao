<template>
  <el-container>
      <el-aside :style="{width:collapse?'60px':'200px'}" style="transition:all 0.5s" class="aside">
          <asideCom :collapse='collapse'></asideCom>
      </el-aside>
      <el-container style="background-color:#f2f3f5">
          <el-header style="padding:0">
              <headerCom></headerCom>
          </el-header>
          <el-main style="padding: 0 10px">
              <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
</template>
<script>

import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collapse: false
    }
  },
  created () {
    // 监听到展开或者关闭，侧边栏也展开或关闭
    eventBus.$on('changeCollapse', () => {
      this.collapse = !this.collapse
    })
  }
}
</script>

<style lang='less' scoped>
.aside{
  min-height: 100vh;
  background-color: #323745;
}
</style>
