<template>
  <div>
      <el-card v-loading='loading' >
          <bread-crumb slot="header">
          <template slot="title">评论列表</template>
          </bread-crumb>
          <el-table :data='list'>
              <el-table-column width="600" label="标题" prop="title"></el-table-column>
              <el-table-column :formatter="formatterStatus" label="评论状态" prop="comment_status"></el-table-column>
              <el-table-column label="总评论数" prop="total_comment_count"></el-table-column>
              <el-table-column label="粉丝评论数" prop="fans_comment_count"></el-table-column>
              <el-table-column label="操作">
                  <template slot-scope="obj">
                    <el-button type="text">修改</el-button>
                    <el-button type="text" @click='openClose(obj.row)'>{{obj.row.comment_status?'关闭':'打开'}}</el-button>
                  </template>
              </el-table-column>
          </el-table>
          <el-row type="flex" justify="center" style='height:60px' align='middle'>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="page.total"
                :page-size='page.pageSize'
                :current-page='page.currentPage'
                @current-change='changePage'
                >
            </el-pagination>
          </el-row>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: false,
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    async loadData () {
      this.loading = true
      let res = await this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize }
      })
      this.loading = false
      this.list = res.data.results
      this.page.currentPage = res.data.page
      this.page.pageSize = res.data.per_page
      this.page.total = res.data.total_count
    },
    formatterStatus (row, column, cellValue) {
      return cellValue ? '正常' : '关闭'
    },
    async openClose (row) {
      let msg = row.comment_status ? '关闭' : '打开'
      await this.$confirm(`您确定要${msg}评论吗?`, '提示')
      await this.$axios({
        url: '/comments/status',
        method: 'put',
        params: { article_id: row.id.toString() },
        data: {
          allow_comment: !row.comment_status
        }
      })
      this.loadData()
    },
    // 分页功能
    changePage (newPage) {
      this.page.currentPage = newPage
      this.loadData()
    }
  },
  created () {
    this.loadData()
  }

}
</script>

<style>

</style>
