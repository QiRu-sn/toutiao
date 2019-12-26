<template>
    <div class="cover">
        <div @click="openDialog" class="cover-item" v-for="(item,index) in list" :key="index">
            <span style="display:block;margin-bottom:10px;">点击图标选择图片</span>
            <div class="image">
                <img :src="item?item:defaultImg" alt="">
            </div>
        </div>
        <el-dialog :visible="visibleDialog" @close="closeDialog">

        </el-dialog>
    </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'),
      visibleDialog: false
    }
  },
  methods: {
    openDialog () {
      this.visibleDialog = true
    },
    closeDialog () {
      this.visibleDialog = false
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
