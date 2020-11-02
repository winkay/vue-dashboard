<template>
  <common-card :title="title">
    <template v-slot:content>
      <v-chart :options='option' style="height:220px; width:100%;" :autoresize='true'/>
    </template>
  </common-card>
</template>

<script>
// @ is an alias to /src
import CommonCard from '@/components/CommonCard.vue'
const datas = window.mockData['computer-resources']

export default {
  name: 'datas',
  components: {
    CommonCard
  },
  data() {
    return {
      title: '',
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
            data: [10, 52, 20, 34, 39, 33, 22, 22, 33, 52, 12, 66, 64],
            symbol: 'circle',
            itemStyle: {
              color: '#4a9df2'
            }
          },
          {
            name: 'GPU利用率',
            type: 'line',
            data: [52, 10, 52, 55, 44, 88, 22, 25, 10, 52, 68, 99, 21, 54, 50],
            symbol: 'circle',
            itemStyle: {
              color: '#29F2FF'
            }
          },
          {
            name: 'GPU显存利用率',
            type: 'line',
            data: [30, 35, 12, 40, 55, 88, 78, 68, 56, 52, 34, 87, 55, 22, 50],
            symbol: 'circle',
            itemStyle: {
              color: '#fff006'
            }
          }
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
  mounted() {
    this.getData(datas)
  },
  methods: {
    getData(res) {
      this.title = res.title
      this.option.xAxis[0].data = res.data.xdata
      this.option.series[0].data = res.data.cpu
      this.option.series[1].data = res.data.gpu
      this.option.series[2].data = res.data.gpuMem
      // this.$axios.get('../../../static/data/computer-resources.json').then((res) => {
      //   this.title = res.title
      //   this.option.xAxis[0].data = res.data.xdata
      //   this.option.series[0].data = res.data.cpu
      //   this.option.series[1].data = res.data.gpu
      //   this.option.series[2].data = res.data.gpuMem
      // })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
