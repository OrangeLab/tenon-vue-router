<template>
  <view class="page">
    <router-view></router-view>
  </view>
</template>
<style lang="less" scoped>
.page{
  height: 100%;
}
</style>

<script>
export default {
  pageConfig: {
    canScroll: false
  }
}
</script>