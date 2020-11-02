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
const datas = window.mockData.memory

export default {
  name: 'Memory',
  components: {
    CommonCard
  },
  data() {
    return {
      title: '内存利用率',
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '5%',
          left: '3%',
          right: '4%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [
          {
            data: ['10-21', '10-22', '10-23', '10-24', '10-25', '10-26', '10-27', '10-28', '10-29'],
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
            name: '内存',
            type: 'line',
            data: [10, 52, 20, 30, 39, 30, 22, 22, 33, 52, 12, 66, 64],
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#41f487'
            }
          }
        ]
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
      this.option.series[0].data = res.data.ydata
      // this.$axios.get('../../../static/data/memory.json').then((res) => {
      //   this.title = res.title
      //   this.option.xAxis[0].data = res.data.xdata
      //   this.option.series[0].data = res.data.ydata
      // })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
