<template>
  <common-card title="历史任务数">
    <template v-slot:content>
      <v-chart :options='option' style="height:210px; width:100%;" :autoresize='true'/>
    </template>
  </common-card>
</template>

<script>
// @ is an alias to /src
import CommonCard from '@/components/CommonCard.vue'
import echarts from 'echarts'

export default {
  name: 'HistoryTasks',
  components: {
    CommonCard
  },
  data () {
    return {
      option: {
        color: ['#4a9df2'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom: 0,
          containLabel: true
        },
        xAxis: [
          {
            data: ['17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1', '17/1',],
            axisLine: {
              lineStyle: {
                color: '#4e548b'
              }
            },
            axisLabel: {
              color: '#eee',
              fontFamily: 'Microsoft YaHei',
              fontSize: 10
            },
            axisTick: {
              alignWithLabel: true,
              length: 0
            }
          }
        ],
        yAxis: [
          {
            splitNumber: 6,
            type: 'value',
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#fefefe'
            },
            axisTick: {
              length: 0
            },
            splitLine: {
              lineStyle: {
                color: '#1f284a',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: '开发环境',
            type: 'line',
            data: [10, 52, 200, 334, 390, 330, 220, 22, 33, 52, 12, 66, 264],
            symbol: 'none',
            itemStyle: {
              color: '#4a9df2'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(74, 157, 242, 0.8)'
              }, {
                offset: 1,
                color: 'rgba(0, 0, 0, 0)'
              }])
            },
          },
          {
            name: '训练任务',
            type: 'line',
            data: [52, 10, 52, 334, 330, 334, 220, 520, 10, 52, 334, 330, 334, 220, 50],
            symbol: 'none',
            itemStyle: {
              color: '#41f487'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(65, 244, 135, 0.8)'
              }, {
                offset: 1,
                color: 'rgba(0, 0, 0, 0)'
              }])
            },
          }
        ],
        legend: {
          top: 0,
          itemWidth: 6,
          right: '4%',
          textStyle: {
            color: '#fff',
            fontSize: 10
          },
          icon: 'circle'
        }
      }
    }
  },
}
</script>

<style scoped lang='scss'>
</style>
