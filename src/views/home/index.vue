<template>
  <el-container>
    <el-aside class="aside" style="width: 200px;">
      <asideCom></asideCom>
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

export default {
}
</script>

<style lang='less' scoped>
.aside{
  min-height: 100vh;
  background-color: #323745;
}
</style>
