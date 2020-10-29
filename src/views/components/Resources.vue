<template>
  <common-card title="AI资源池情况">
    <template v-slot:content>
      <div style='text-align: left;'>
        <el-row style="margin-top:20px">
          <el-col :span="12">
            <div class="res-image">
              <img src="../../../static/images/image.png" />
            </div>
            <div class="res-desc">
              <span class='res-num'>34</span>
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
              <span class='res-num'>462</span>
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
              <span class='res-num'>68.5</span>
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
              <span class='res-num'>16</span>
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
