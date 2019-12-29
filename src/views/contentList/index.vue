<template>
  <div>
      <el-card style="margin-bottom:10px;">
          <bread-crumb slot="header">
            <template slot="title">内容列表</template>
          </bread-crumb>
            <el-form>
                <el-form-item label="文章状态 :">
                    <el-radio-group v-model="searchForm.status" >
                        <el-radio :label="5">全部</el-radio>
                        <el-radio :label="0">草稿</el-radio>
                        <el-radio :label="1">待审核</el-radio>
                        <el-radio :label="2">审核通过</el-radio>
                        <el-radio :label="3">审核失败</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="频道列表 :">
                    <el-select  placeholder="请选择" v-model="searchForm.channel_id" >
                        <el-option v-for="item in channels" :key="item.id" :label='item.name' :value='item.id'></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label='时间选择 :'>
                    <template>
                        <div class="block" >
                          <el-date-picker
                            v-model="searchForm.dateRange"
                            value-format='yyyy-MM-dd'
                            type="datetimerange"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                          </el-date-picker>
                        </div>
                    </template>
                </el-form-item>
            </el-form>
      </el-card>
      <el-card v-loading='loading'>
        <el-row slot="header" class="clearfix">
            <span>共找到{{page.total}}条符合条件的内容</span>
        </el-row>
        <el-row v-for="item in list" :key='item.id.toString()' style="border-bottom:1px dashed #ccc;padding-bottom:10px;padding-top:10px;">
            <el-col :span='4'>
                <img style="width:200px;height:150px;" :src="item.cover.images.length?item.cover.images[0]:defalutImg" alt="">
            </el-col>
            <el-col :span='18' style="height:150px; line-height:40px;">
                <el-row>{{item.title}}</el-row>
                <el-row>
                    <el-tag :type="item.status|filterType" style="width:100px;height:35px;font-size:14px;text-align:center">{{item.status|filterStatus}}</el-tag>
                </el-row>
                <el-row style="font-size:12px;color:#999">{{item.pubdate}}</el-row>
            </el-col>
            <el-col :span='2'>
                <el-link :underline="false" style="margin-right:20px;" @click='editContent(item.id)'>
                    <i class="el-icon-edit"></i>
                    编辑
                </el-link>
                <el-link :underline="false"  @click='delContent(item.id)'>
                    <i class="el-icon-delete"></i>
                    删除
                </el-link>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" style="height:60px;">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="page.total"
                :current-page="page.currentPage"
                :page-size="page.pageSize"
                @current-change='changePage'
                >
            </el-pagination>
        </el-row>
      </el-card>
  </div>
</template>

<script>
import { getChannels } from '../../actions/articles'
export default {
  data () {
    return {
      loading: false,
      value: '',
      channels: [],
      searchForm: {
        status: 5,
        channel_id: null,
        dateRange: []
      },
      list: [],
      defalutImg: require('../../assets/img/404.png'),
      page: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      }
    }
  },
  methods: {
    //   获取频道列表
    async getChannels () {
      let res = await getChannels()
      this.channels = res.data.channels
    },
    // 获取文章内容
    async getContent (params) {
      this.loading = true
      let res = await this.$axios({
        url: '/articles',
        params
      })
      this.loading = false
      this.list = res.data.results
      this.page.total = res.data.total_count
    },
    // 搜索筛选
    changeContent () {
      this.page.currentPage = 1
      this.getPageContent()
    },
    // 分页功能
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getPageContent()
    },
    getPageContent () {
      let params = {
        status: this.searchForm.status === 5 ? null : this.searchForm.status,
        channel_id: this.searchForm.channel_id,
        begin_pubdate: this.searchForm.dateRange ? this.searchForm.dateRange[0] : null,
        end_pubdate: this.searchForm.dateRange > 1 ? this.searchForm.dateRange[1] : null,
        page: this.page.currentPage,
        per_page: this.page.pageSize
      }
      this.getContent(params)
    },
    // 删除文章内容
    async delContent (id) {
      await this.$confirm('您确定要删除吗?')
      await this.$axios({
        method: 'delete',
        url: `/articles/${id.toString()}`
      })
      this.$message({
        type: 'success',
        message: '删除成功'
      })
      this.getPageContent()
    },
    // 编辑文章内容
    editContent (id) {
      this.$router.push(`/home/publish/${id.toString()}`)
    }
  },
  filters: {
    //   状态过滤器
    filterStatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    },
    // 设置改变各类型标签颜色过滤器
    filterType (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'danger'
        default:
          break
      }
    }
  },
  created () {
    this.getChannels()
    this.getContent({ page: 1, per_page: 10 })
  },
  // 深度监听筛选事件
  watch: {
    searchForm: {
      deep: true,
      handler () {
        this.getPageContent()
      }
    }
  }
}
</script>

<style lang='less' scoped>
</style>
