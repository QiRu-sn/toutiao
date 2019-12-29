<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">图文数据</template>
      </bread-crumb>
      <el-row type="flex" justify="start">
          <el-button style="border-radius:0;margin:0;border:1px solid #409EFF;" type="primary" size="small">今日</el-button>
          <el-button style="border-radius:0;margin:0;border:1px solid #409EFF;" plain size="small">本周</el-button>
          <el-button style="border-radius:0;margin:0;border:1px solid #409EFF;margin-left:-1px;" plain size="small">本月</el-button>
          <el-date-picker
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['00:00:00', '23:59:59']"
              style="margin-left:50px;">
          </el-date-picker>
      </el-row>
      <el-row class="countRow">
          <span class="count">
              <i class="icon"></i>
              <el-row class="count_span" style="top:25px;font-size:25px;">30个</el-row>
              <el-row class="count_span" style="top:55px;font-size:14px;">粉丝数</el-row>
          </span>
          <span class="count">
              <i class="icon"></i>
              <el-row class="count_span" style="top:25px;font-size:25px;">22%</el-row>
              <el-row class="count_span" style="top:55px;font-size:14px;">粉丝累计阅读量</el-row>
          </span>
          <span class="count">
              <i class="icon"></i>
              <el-row class="count_span" style="top:25px;font-size:25px;">1.2元</el-row>
              <el-row class="count_span" style="top:55px;font-size:14px;">粉丝收益</el-row>
          </span>
      </el-row>
      <el-row>
          <span>头条粉丝</span>
          <div id="myChart" style="width: 1600px;height:400px;">
          </div>
      </el-row>
      <el-row type="flex" justify="start" style="padding-left:30px;"><span style="flex:50%;">图文数据</span><span style="flex:50%;">图文数据</span></el-row>
      <el-row class="data">
          <div class="graphic_count" style="position:relative">
              <div class="countChart" style="width: 250px;height:250px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"></div>
          </div>
          <div class="graphic_count" style="position:relative">
              <div class="countChart" style="width: 250px;height:250px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"></div>
          </div>
      </el-row>
  </el-card>
</template>

<script>
export default {
  methods: {
    echartsfans () {
    // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      var list = document.getElementsByClassName('countChart')
      list.forEach(item => {
        this.$echarts.init(item).setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          color: ['#38B0DE', '#ADEAEA', '#9370DB'],
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['推荐', '推荐', '推荐']
          },
          series: [
            {
              name: '图文数据',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { value: 335, name: '平均阅读进度' },
                { value: 310, name: '图文数据跳出率' },
                { value: 234, name: '平均阅读速度' }
              ]
            }
          ]
        })
      })

      // 绘制图表
      myChart.setOption({
        color: '#38B0DE',
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          areaStyle: {}
        }]
      })
    }
  },
  mounted () {
    this.echartsfans()
  }
}
</script>

<style lang='less' scoped>
.countRow{
    display: flex;
    flex-direction: row;
    align-items: space-around;
        .count{
            flex:33%;
            background-color:rgb(248, 248, 248);
            margin:20px 30px;
            margin-left: 0px;
            height:100px;
            padding: 10px;
            position: relative;
            .icon{
                width: 50px;
                height: 50px;
                position: absolute;
                background-color:red;
                border-radius: 50%;
                top:50%;
                left: 40%;
                transform: translate(-50%,-50%)
            }
            .count_span{
                position: absolute;
                left: 48%;
            }

        }
}
.data{
    display: flex;
    justify-content: space-between;

    .graphic_count{
        flex:50%;
        width:450px;
        height: 200px;
        margin: 20px;
        background-color: rgb(248, 248, 248);
    }
}
</style>
