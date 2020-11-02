<template>
  <div class="home">
    <div class="home-title">
      <!-- <img src="../../static/images/toptitle.png" style="margin: 0 auto;"/> -->
      <span>{{name}}</span>
    </div>
    <el-row :gutter='8'>
      <el-col :span='6'>
        <resources/>
      </el-col>
      <el-col :span='12'>
        <total-tasks/>
      </el-col>
      <el-col :span='6'>
        <users/>
      </el-col>
    </el-row>
    <el-row :gutter='8' class="row-margin">
      <el-col :span='6'>
        <node-resources/>
      </el-col>
      <el-col :span='12'>
        <history-tasks/>
      </el-col>
      <el-col :span='6'>
        <framework/>
      </el-col>
    </el-row>
    <el-row :gutter='8' class="row-margin">
      <el-col :span='5'>
        <GPU/>
      </el-col>
      <el-col :span='5'>
        <memory/>
      </el-col>
      <el-col :span='5'>
        <storage/>
      </el-col>
      <el-col :span='9'>
        <computer-resources/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Resources from './components/Resources.vue'
import TotalTasks from './components/TotalTasks.vue'
import Users from './components/Users.vue'
import NodeResources from './components/NodeResources.vue'
import HistoryTasks from './components/HistoryTasks.vue'
import Framework from './components/Framework.vue'
import GPU from './components/GPU.vue'
import Memory from './components/Memory.vue'
import Storage from './components/Storage.vue'
import ComputerResources from './components/ComputerResources.vue'
const name = window.mockData.name

export default {
  name: 'Home',
  components: {
    Resources, TotalTasks, Users, NodeResources, HistoryTasks, Framework, GPU, Memory, Storage, ComputerResources
  },
  data() {
    return {
      name: name
    }
  }
}
</script>

<style scoped lang='scss'>
.home {
  margin: 10px;
  .row-margin {
    margin: 10px 20px;
  }

  .home-title {
    background: url(../../static/images/topimg.png) no-repeat center;
    height: 80px;
    // margin-bottom: 10px;

    span {
      font-size: 50px;
      line-height: 50px;
      font-weight: bold;
      color: #0fbfd7;
    }
  }
}
</style>
