<template>
  <div>
      <el-tabs  v-model="activeName" type="card" v-loading='loading'>
            <el-tab-pane label="素材库" name="cover">
                <el-tabs v-model="name" type="card" primary @tab-click='getMaterial'>
                    <el-tab-pane label="全部" name="all">
                        <div class="imgList" >
                            <el-card class="img-card" v-for="item in list" :key='item.id' :body-style="{ padding: '0px' }">
                                <img :src="item.url" alt="" @click="clickImg(item.url)">
                            </el-card>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="收藏" name="collect">
                        <div class="imgList" >
                            <el-card class="img-card" v-for="item in list" :key='item.id' :body-style="{ padding: '0px' }">
                                <img :src="item.url" alt="" @click="clickImg(item.url)">
                            </el-card>
                        </div>
                    </el-tab-pane>
                </el-tabs>
                <el-row type="flex" justify="center" style="margin:20px;">
                    <el-pagination class='imgPage' @current-change='changePage'
                    :current-page='page.currentPage'
                    :page-size='page.pageSize'
                    :total='page.total'
                    background
                    layout="prev, pager, next">
                </el-pagination>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="上传图片" name="upload">
                <el-upload
                    class="upload-demo"
                    action=""
                    :show-file-list="false"
                    :http-request="uploadImg">
                    <div>
                      <img style="margin-left:150%" :src="defaultImage" alt="">
                    </div>
                </el-upload>
            </el-tab-pane>
      </el-tabs>

  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      activeName: 'cover',
      name: 'all',
      list: [],
      defaultImage: require('../../assets/img/pic_bg.png'),
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    //  获取全部及收藏图片内容
    async getMaterial () {
      this.loading = true
      let res = await this.$axios({
        url: '/user/images',
        params: {
          collect: this.name === 'collect',
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      })
      this.loading = false
      this.list = res.data.results
      this.page.total = res.data.total_count
    },
    // 改变页码
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    // 图片被选中
    clickImg (url) {
      this.$emit('selectImg', url)
    },
    // 上传图片
    async uploadImg (params) {
      let data = new FormData()
      data.append('image', params.file)
      let res = await this.$axios({
        url: '/user/images',
        method: 'post',
        data
      })
      this.$emit('selectImg', res.data.url)
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
    width: 172px;
    height:130px;
    margin-right:10px;
    margin-bottom: 10px;
    cursor: pointer;
    img{
        width:100%;
        height:100%;
    }
}
}
</style>
