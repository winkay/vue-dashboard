<template>
  <common-card :title="title">
    <template v-slot:content>
      <v-chart
        :options="option"
        style="height: 220px; width: 100%"
        :autoresize="true"
      />
    </template>
  </common-card>
</template>

<script>
// @ is an alias to /src
import CommonCard from '@/components/CommonCard.vue'
// import datas from '../../../static/data/framework.json'
const datas = window.mockData.framework

export default {
  name: 'Framework',
  components: {
    CommonCard
  },
  data() {
    return {
      title: '热门AI框架',
      option: {
        tooltip: {
          formatter: (params, ticket, callback) => {
            return params.name + ':' + params.data.symbolSize
          }
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        color: ['#83e0ff', '#45f5ce', '#b158ff'],
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 200,
              edgeLength: [10, 50]
            },
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                name: '图像处理',
                symbolSize: 120,
                category: 0,
                itemStyle: {
                  normal: {
                    borderColor: '#3dee7b',
                    borderWidth: 6,
                    color: '#001c43'
                  }
                }
              },
              {
                name: '人像识别',
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    borderColor: '#c105fb',
                    borderWidth: 4,
                    color: '#001c43'
                  }
                },
                category: 1
              },
              {
                name: '车辆识别',
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: '#04f2a7',
                    borderWidth: 4,
                    color: '#001c43'
                  }
                }
              },
              {
                name: '实时计算',
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: '#82dffe',
                    borderWidth: 4,
                    color: '#001c43'
                  }
                }
              },
              {
                name: 'BI',
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: '#fff006',
                    borderWidth: 4,
                    color: '#001c43'
                  }
                }
              }
            ]
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
      for (let index = 0; index < res.data.length; index++) {
        const data = res.data[index]
        this.option.series[0].data[index].symbolSize = data
      }
      // this.$axios.get('../../../static/data/framework.json').then((res) => {
      //   this.title = res.title
      //   for (let index = 0; index < res.data.length; index++) {
      //     const data = res.data[index]
      //     this.option.series[0].data[index].symbolSize = data
      //   }
      // })
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
