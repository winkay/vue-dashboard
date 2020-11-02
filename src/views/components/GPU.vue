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
const datas = window.mockData.gpu

export default {
  name: 'GPU',
  components: {
    CommonCard
  },
  data() {
    return {
      title: 'GPU使用情况',
      option: {
        color: ['#fff006', '#025edd'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['10-21', '10-22', '10-23', '10-24', '10-25', '10-26', '10-27', '10-28', '10-29'],
            axisLine: {
              lineStyle: {
                color: '#4e548b'
              }
            },
            axisLabel: {
              color: '#fefefe'
            },
            axisTick: {
              alignWithLabel: true,
              length: 0
            }
          }
        ],
        yAxis: [
          {
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
            name: '已使用',
            type: 'bar',
            stack: '总量',
            barWidth: '19px',
            data: [10, 5, 20, 44, 2, 10, 4, 6, 10]
          },
          {
            name: '未使用',
            type: 'bar',
            stack: '总量',
            barWidth: '19px',
            data: [10, 20, 5, 6, 12, 22, 14, 24, 5]
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
      this.option.series[0].data = res.data.used
      this.option.series[1].data = res.data.unused
      // this.$axios.get('../../../static/data/gpu.json').then((res) => {
      //   this.title = res.title
      //   this.option.xAxis[0].data = res.data.xdata
      //   this.option.series[0].data = res.data.used
      //   this.option.series[1].data = res.data.unused
      // })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
