<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">素材管理</template>
      </bread-crumb>
      <el-row>
        <el-tabs v-model="activeName" type="card" class="tabs" @tab-click='changeTab'>
            <el-tab-pane label="全部" name='all'>
              <div class="imgList">
                <el-card class="img-card" v-for="item in list" :key='item.id' :body-style="{ padding: '0px' }">
                  <img :src="item.url" alt="">
                  <el-row class="imgIco">
                    <i class='el-icon-star-on'></i>
                    <i class="el-icon-delete-solid"></i>
                  </el-row>
                </el-card>
              </div>
            </el-tab-pane>
            <el-tab-pane label="收藏" name='collect'>
              <div class="imgList">
                <el-card class="img-card" v-for="item in list" :key='item.id' :body-style="{ padding: '0px' }">
                  <img :src="item.url" alt="">
                </el-card>
              </div>
            </el-tab-pane>
        </el-tabs>
      </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: []
    }
  },
  methods: {
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect'
        }
      }).then(res => {
        this.list = res.data.results
      })
    },
    changeTab () {
      this.getMaterial()
    }
  },
  created () {
    this.getMaterial()
  }

}
</script>

<style lang='less' scoped>
.imgList{
  display: flex;
  flex-wrap: wrap;
  justify-content: statr;
.img-card{
  width:200px;
  height:200px;
  margin:20px 30px;
  position: relative;
  img{
    width: 200px;
    height:200px;
  }
  .imgIco{
    position: absolute;
    font-size: 20px;
    left: 0;
    bottom: 0px;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:30px;
    background-color: #f4f5f6;
  }
}
}
</style>
