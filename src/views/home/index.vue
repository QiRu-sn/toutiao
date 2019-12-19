<template>
  <el-container>
    <el-aside class="aside" style="width: 200px;">
      <asideCom></asideCom>
    </el-aside>
    <div>
       <el-header>Header</el-header>
       <el-main>Main</el-main>
    </div>
  </el-container>
</template>

<script>
import asideCom from '../../components/home'
export default {
  components: {
    asideCom
  }
}
</script>

<style lang='less' scoped>
.aside{
  height: 100vh;
  background-color: #323745;
}
</style>
