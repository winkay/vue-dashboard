<template>
  <common-card title="热门AI框架">
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

export default {
  name: 'Framework',
  components: {
    CommonCard
  },
  data() {
    return {
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
                name: '校园大数据',
                symbolSize: 120,
                category: 0,
                itemStyle: {
                  normal: {
                    borderColor: '#04f2a7',
                    borderWidth: 6,
                    color: '#001c43'
                  }
                }
              },
              {
                name: '舆情大数据',
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    borderColor: '#04f2a7',
                    borderWidth: 4,
                    color: '#001c43'
                  }
                },
                category: 1
              },
              {
                name: '用户分析',
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
                name: '话题分析',
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
                name: '评论分析',
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
                name: '图书馆分析',
                symbolSize: 100,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: '#82dffe',
                    borderWidth: 4,
                    color: '#001c43'
                  }
                }
              },
              {
                name: '借阅分析',
                symbolSize: 80,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: '#b457ff',
                    borderWidth: 4,
                    color: '#001c43'
                  }
                }
              },
              {
                name: '借阅排行',
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: '#82dffe',
                    borderWidth: 4,
                    color: '#001c43'
                  }
                },
                category: 2
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
