<template>
  <el-card shadow='never' class="custom-header">
    <div slot="header" v-if='title'>
      <span>{{title}}</span>
    </div>
    <slot name="content"/>
  </el-card>
</template>

<script>
export default {
  name: 'CommonCard',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.custom-header {
  border: 4px solid #065278;
  background-color: rgba(255, 255, 255, 0);

  .el-card__header {
    height: 36px;
    text-align: left;
    padding: 6px 20px;
    background-image: linear-gradient(to right, rgba(38, 82, 120, 1), rgba(3, 11, 31, 0));
    border-bottom: 0px solid #EBEEF5;

    span {
      color: #eeeeee;
      text-align: left;
      font-size: 21px;
    }
  }
}
</style>
