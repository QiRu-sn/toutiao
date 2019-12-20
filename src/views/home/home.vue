<template>
  <div>
      <el-carousel  :interval="5000" arrow="always"  height='865px'>
            <el-carousel-item v-for="item in list" :key="item">
              <img style="width:100%;height:865px" :src="item" alt="">
            </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5b37cdb85b3b93b5938cc508a10c906.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a38b1d56409913d5dc869023ade36d94.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d1599ed57cd3ca8751966105f86571e6.jpg?w=2452&h=920',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6731e5a37682eec528729d7c05a9b581.jpg?thumb=1&w=1226&h=460&f=webp&q=90']
    }
  }

}
</script>

<style>
</style>
