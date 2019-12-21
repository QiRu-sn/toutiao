<template>
  <div>
      <el-card >
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
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    loadData () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(res => {
        console.log(res)

        this.list = res.data.results
      })
    },
    formatterStatus (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    openClose (row) {
      let msg = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您确定要${msg}评论吗?`, '提示').then(() => {
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: { article_id: row.id },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(res => {
          this.loadData()
        })
      })
    }
  },
  created () {
    this.loadData()
  }

}
</script>

<style>

</style>
