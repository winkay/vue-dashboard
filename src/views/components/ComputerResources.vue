<template>
  <common-card title="计算资源利用率">
    <template v-slot:content>
      <v-chart :options='option' style="height:220px; width:100%;" :autoresize='true'/>
    </template>
  </common-card>
</template>

<script>
// @ is an alias to /src
import CommonCard from '@/components/CommonCard.vue'
import echarts from 'echarts'

export default {
  name: 'ComputerResources',
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
            data: ['07/1', '07/2', '07/3', '07/4', '07/5', '07/6', '07/7', '07/8', '07/9', '07/10'],
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
            name: 'CPU利用率',
            type: 'line',
            data: [10, 52, 200, 334, 390, 330, 220, 22, 33, 52, 12, 66, 264],
            symbol: 'circle',
            itemStyle: {
              color: '#4a9df2'
            }
          },
          {
            name: 'GPU利用率',
            type: 'line',
            data: [52, 10, 52, 334, 330, 334, 220, 520, 10, 52, 334, 330, 334, 220, 50],
            symbol: 'circle',
            itemStyle: {
              color: '#29F2FF'
            }
          },
          {
            name: 'GPU显存利用率',
            type: 'line',
            data: [200, 10, 52, 334, 330, 334, 20, 520, 100, 52, 34, 330, 334, 220, 50],
            symbol: 'circle',
            itemStyle: {
              color: '#fff006'
            }
          },
        ],
        legend: {
          itemWidth: 10,
          right: '4%',
          textStyle: {
            color: '#fff',
            fontSize: 14
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
