<template>
  <div class="tab-switcher">
    <div class="tab" :class="{'active': current === tab.title}" v-for="tab in tabList" :key="tab.title"
         @click="change(tab.title)">
      {{tab.title}}
    </div>
  </div>
</template>

<script>
const tabList = [
  { title: 'node1' },
  { title: 'node2' },
  { title: 'node3' }
]
export default {
  name: 'TabSwitcher',
  data() {
    return {
      tabList,
      current: 'node1'
    }
  },
  methods: {
    change(tab) {
      this.current = tab
      this.$emit('change', tab)
    }
  }
}
</script>

<style scoped lang="scss">
  .tab-switcher {
    display: inline-flex;
    height: 35px;
    line-height: 29px;
    background-color: #065278;
    padding: 3px 0;
    border-radius: 2px;
    box-sizing: border-box;

    .tab {
      border-radius: 2px;
      margin: 0 3px;
      width: 80px;
      font-size: 17px;
      color: #eeeeee;
      cursor: pointer;
      box-sizing: border-box;

      &.active {
        background-color: #00b7ee;
      }
    }
  }
</style>
