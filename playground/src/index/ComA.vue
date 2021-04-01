<template lang="">
  <view class="com-a">
    <text>COM_A is also home to router</text>
    <router-link to="/ComB">
      <text class="jump-btn" >go to ComB</text>
    </router-link>
  </view>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.jump-btn{
  height: 80hm;
  width: 710hm;
  margin: 100hm 20hm 0 20hm;
  border-radius: 10hm;
  color: white;
  text-align: center;
  background-color: #fa9153;
}
</style>