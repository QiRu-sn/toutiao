<template>
  <el-container>
    <el-aside class="aside" style="width: 200px;">
      <asideCom></asideCom>
    </el-aside>
      <el-container style="background-color:#f2f3f5">
        <el-header style="margin:0">
          <headerCom></headerCom>
        </el-header>
          <el-main>
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
  height: 100vh;
  background-color: #323745;
}
</style>
