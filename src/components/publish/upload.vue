<template>
  <div>
      <el-tabs  v-model="activeName" type="card">
            <el-tab-pane label="素材库" name="cover">
                <el-tabs v-model="name" type="card" primary @tab-click='getMaterial'>
                    <el-tab-pane label="全部" name="all">
                        <div class="imgList" >
                            <el-card class="img-card" v-for="item in list" :key='item.id' :body-style="{ padding: '0px' }">
                                <img :src="item.url" alt="" @click="clickImg(item.id)">
                            </el-card>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="收藏" name="collect">
                        <div class="imgList" >
                            <el-card class="img-card" v-for="item in list" :key='item.id' :body-style="{ padding: '0px' }">
                                <img :src="item.url" alt="" @click="clickImg(item.id)">
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
                <div class="default">
                    <img src="../../assets/img/pic_bg.png" alt="">
                </div>
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :auto-upload="false">
                    <span style="float:left;margin-right:20px;height:30px;line-height:30px;">用户图片</span>
                    <div style="float:left">
                        <el-button slot="trigger" size="small" type="primary">点击选择图片</el-button>
                    </div>
                    <div style="margin-left:40px;margin-top:40px;">
                    <el-button style="margin-left: 10px;" size="small" type="primary">开始上传</el-button>
                    </div>
                </el-upload>
            </el-tab-pane>
      </el-tabs>
      <el-row type="flex" justify="center">
            <el-button>取消</el-button>
            <el-button type="primary">确定</el-button>
      </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'cover',
      name: 'all',
      list: [],
      image: '',
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    //  获取全部及收藏图片内容
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.name === 'collect',
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then(res => {
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    },
    // 改变页码
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getMaterial()
    },
    // 图片被选中
    clickImg (id) {
      alert(id)
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
.default{
    width:300px;
    height:200px;
    margin: 30px auto;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
