<template>
  <common-card :title="title">
    <template v-slot:content>
      <div style='text-align: left;'>
        <el-row style="margin-top:20px">
          <el-col :span="12">
            <div class="res-image">
              <img src="../../../static/images/image.png" />
            </div>
            <div class="res-desc">
              <span class='res-num'>{{result.image}}</span>
              <span class='res-unit'>个</span>
              <br />
              <span class='res-name'>镜像</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="res-image">
              <img src="../../../static/images/node.png" />
            </div>
            <div class="res-desc">
              <span class='res-num'>{{result.node}}</span>
              <span class='res-unit'>个</span>
              <br />
              <span class='res-name'>节点</span>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-top:40px">
          <el-col :span="12">
            <div class="res-image">
              <img src="../../../static/images/storage.png" />
            </div>
            <div class="res-desc">
              <span class='res-num'>{{result.storage}}</span>
              <span class='res-unit'>GB</span>
              <br />
              <span class='res-name'>存储</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="res-image">
              <img src="../../../static/images/gpu.png" />
            </div>
            <div class="res-desc">
              <span class='res-num'>{{result.gpu}}</span>
              <span class='res-unit'>个</span>
              <br />
              <span class='res-name'>GPU</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </template>
  </common-card>
</template>

<script>
// @ is an alias to /src
import CommonCard from '@/components/CommonCard.vue'

export default {
  name: 'Resources',
  components: {
    CommonCard
  },
  data() {
    return {
      title: 'AI资源池情况',
      result: {
        image: 0,
        node: 0,
        storage: 0,
        gpu: 0
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios.get('../../../static/data/resources.json').then((res) => {
        this.title = res.title
        this.result = Object.assign({}, this.result, res.data)
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.res-image {
  margin-left: 50px;
  display: inline-block;
}
.res-desc {
  margin-left: 10px;
  display: inline-block;
  bottom: 12px;
  position: relative;

  .res-num {
    font-size: 24px;
  }

  .res-unit {
    font-size: 12px;
    color: #656970;
  }

  .res-name {
    font-size: 17px;
  }
}
</style>
