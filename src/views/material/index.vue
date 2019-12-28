<template>
  <el-card v-loading="loading">
      <bread-crumb slot="header">
        <template slot="title">素材管理</template>
      </bread-crumb>
      <el-row>
        <el-row style="position: relative;">
          <el-upload action="" :http-request="uploadImg" :show-file-list='false'  style="position: absolute; right:0; z-index:1" >
            <el-button  type="primary">发布图片</el-button>
          </el-upload>
        </el-row>
        <el-tabs v-model="activeName" type="card" class="tabs" @tab-click='changeTab'>
            <el-tab-pane primary label="全部" name='all'>
              <div class="imgList">
                <el-card class="img-card" v-for="item in list" :key='item.id' :body-style="{ padding: '0px' }">
                  <el-image
                    style="width: 100%; height: 100%"
                    :src="item.url"
                    :preview-src-list="srcList">
                  </el-image>
                  <el-row class="imgIco">
                    <i @click='collandcan(item)' :style="{color:item.is_collected?'red':'#000'}" class='el-icon-star-on'></i>
                    <i @click='delImg(item)' class="el-icon-delete-solid"></i>
                  </el-row>
                </el-card>
              </div>
            </el-tab-pane>
            <el-tab-pane label="收藏" name='collect'>
              <div class="imgList">
                <el-card class="img-card" v-for="item in list" :key='item.id' :body-style="{ padding: '0px' }">
                  <el-image
                    style="width: 100%; height: 100%"
                    :src="item.url"
                    :preview-src-list="srcList">
                  </el-image>
                  <el-row class="imgIco">
                    <i @click='collandcan(item)' :style="{color:item.is_collected?'red':'#000'}" class='el-icon-star-on'></i>
                    <i @click='delImg(item)' class="el-icon-delete-solid"></i>
                  </el-row>
                </el-card>
              </div>
            </el-tab-pane>
        </el-tabs>
        <el-pagination class='imgPage' @current-change='changePage'
            :current-page='page.currentPage'
            :page-size='page.pageSize'
            :total='page.total'
            background
            layout="prev, pager, next">
        </el-pagination>
      </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      loading: false,
      list: [],
      page: {
        currentPage: 1,
        pageSize: 12,
        total: 0
      },
      srcList: []
    }
  },
  methods: {
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect',
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then(res => {
        this.list = res.data.results
        console.log(res.data.results)
        res.data.results.forEach((item) => {
          this.srcList.push(item.url)
        })
        this.page.total = res.data.total_count
      })
    },
    changeTab () {
      this.getMaterial()
    },
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    // 上传图片素材
    uploadImg (params) {
      this.loading = true
      let data = new FormData()
      data.append('image', params.file)
      this.$axios({
        method: 'post',
        url: '/user/images',
        data
      }).then(res => {
        this.loading = false
        this.getMaterial()
      })
    },
    // 取消或收藏素材
    collandcan (item) {
      this.$axios({
        url: `/user/images/${item.id}`,
        method: 'put',
        data: {
          collect: !item.is_collected
        }
      }).then(res => {
        this.getMaterial()
      })
    },
    // 删除图片素材
    delImg (item) {
      this.$confirm('您确定要删除这张图片吗？').then(() => {
        this.$axios({
          method: 'delete',
          url: `/user/images/${item.id}`
        }).then(() => {
          this.getMaterial()
        })
      })
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
  justify-content: start;
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
    cursor: pointer;
  }
}
}
.imgPage{
  display: flex;
  justify-content: center;
}
</style>
