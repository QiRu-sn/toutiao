<template>
  <el-container>
    <el-aside class="aside" style="width: 200px;">
      <asideCom></asideCom>
    </el-aside>
      <el-container style="background-color:#f2f3f5">
        <el-header style="padding:0">
          <headerCom></headerCom>
        </el-header>
          <el-main style="padding:0px 10px">
            <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>

</template>

<script>
export default {
  created () {
    this.$notify({
      title: '警告',
      message: '大家好,由于目前黑马头条为公共浏览测试项目,且拥有公众测试账号,请大家文明发帖,发图,维护大家浏览环境',
      type: 'warning',
      duration: 0
    })
  }
}
</script>

<style lang='less' scoped>
.aside{
  height: 100vh;
  background-color: #323745;
}
</style>
