<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">素材管理</template>
      </bread-crumb>
      <el-row>
        <el-radio-group  v-model="tabPosition">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="收藏"></el-radio-button>
        </el-radio-group>
        <el-button style="float:right" type="primary">上传图片</el-button>
      </el-row>
      <el-row>
          <el-card>
              <!-- <img src="../../assets/img/login_bg1.jpeg" alt=""> -->
          </el-card>
      </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      tabPosition: 'left'
    }
  }
}
</script>

<style>

</style>
