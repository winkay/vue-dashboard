<template>
  <div class="home">
    <common-card title="Welcome">
      <template v-slot:content>
        fasdfasdfasd
      </template>
    </common-card>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonCard from '@/components/CommonCard.vue'

export default {
  name: 'Home',
  components: {
    CommonCard
  }
}
</script>

<style scoped lang='scss'>
</style>
