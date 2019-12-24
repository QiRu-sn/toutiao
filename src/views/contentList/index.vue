<template>
  <div>
      <el-card style="margin-bottom:10px;">
          <bread-crumb slot="header">
            <template slot="title">内容列表</template>
          </bread-crumb>
            <el-form>
                <el-form-item label="文章状态 :">
                    <el-tabs class="tabs" type="card" >
                        <el-tab-pane label="全部"></el-tab-pane>
                        <el-tab-pane label="草稿"></el-tab-pane>
                        <el-tab-pane label="待审核"></el-tab-pane>
                        <el-tab-pane label="审核通过"></el-tab-pane>
                        <el-tab-pane label="审核失败"></el-tab-pane>
                     </el-tabs>
                </el-form-item>
                <el-form-item label="频道列表 :">
                    <el-select  placeholder="请选择">
                        <el-option label='开发者资讯' value='develop'></el-option>
                        <el-option label='ios' value='ios'></el-option>
                        <el-option label='c++' value='c++'></el-option>
                        <el-option label='android' value='android'></el-option>
                        <el-option label='css' value='css'></el-option>
                        <el-option label='数据库' value='sql'></el-option>
                        <el-option label='区块链' value='blockchain'></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label='时间选择 :'>
                    <template>
                        <div class="block">
                          <el-date-picker
                            v-model="value"
                            type="datetimerange"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :default-time="['00:00:00', '23:59:59']">
                          </el-date-picker>
                        </div>
                    </template>
                </el-form-item>
            </el-form>
      </el-card>
      <el-card>
        <el-row slot="header" class="clearfix">
            <span>共找到62278条符合条件的内容</span>
        </el-row>
        <el-row>
            <el-col :span='4'>
                <img src="../../assets/img/pic_bg.png" alt="">
            </el-col>
            <el-col :span='18'>
                <el-row>123456</el-row>
                <el-row>
                    <el-button type="primary" plain>已发表</el-button>
                </el-row>
                <el-row>123</el-row>
            </el-col>
            <el-col :span='2'>
                <el-link :underline="false" style="margin-right:20px;">
                    <i class="el-icon-edit"></i>
                    编辑
                </el-link>
                <el-link :underline="false">
                    <i class="el-icon-delete"></i>
                    删除
                </el-link>
            </el-col>
        </el-row>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang='less' scoped>
</style>
