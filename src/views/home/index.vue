<template>
  <el-container>
    <el-aside class="aside" style="width: 200px;">
      <asideCom></asideCom>
    </el-aside>
      <el-container style="background-color:#f2f3f5">
        <el-header style="padding:0">
          <headerCom></headerCom>
        </el-header>
          <el-main>Main</el-main>
      </el-container>
  </el-container>
</template>

<script>
import asideCom from '../../components/home/aside'
import headerCom from '../../components/home/header'
export default {
  components: {
    asideCom,
    headerCom
  }
}
</script>

<style lang='less' scoped>
.aside{
  height: 100vh;
  background-color: #323745;
}
</style>
