<template>
    <div class="cover">
        <div @click="openDialog(index)" class="cover-item" v-for="(item,index) in list" :key="index">
            <span style="display:block;margin-bottom:10px;">点击图标选择图片</span>
            <div class="image">
                <img :src="item?item:defaultImg" alt="">
            </div>
        </div>
        <el-dialog :visible="visibleDialog" @close="closeDialog" >
            <uploadCover @selectImg='receiveImg'></uploadCover>
            <el-row type="flex" justify="center">
                <el-button @click='visibleDialog=false'>取消</el-button>
                <el-button type="primary">确定</el-button>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'),
      visibleDialog: false,
      selectIndex: -1
    }
  },
  methods: {
    openDialog (index) {
      this.visibleDialog = true
      this.selectIndex = index
    },
    closeDialog () {
      this.visibleDialog = false
    },
    receiveImg (url) {
      this.visibleDialog = false
      this.$emit('selectOneImg', url, this.selectIndex)
    }
  }
}
</script>

<style lang='less' scoped>
.cover{
    margin:20px 100px;
    display: flex;
    .cover-item{
        width:300px;
        height:300px;
        border:1px solid #ccc;
        text-align: center;
        padding: 15px;
        .image{
            width:270px;
            height:230px;
            img{
                width: 100%;
                height:100%;
            }
        }
    }
}
</style>
