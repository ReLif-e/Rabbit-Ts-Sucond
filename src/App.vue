<template>
<router-view></router-view>
</template>

<script setup lang="ts">
// 测试axios
// import axios from './utils/request'
// const test = async () => {
//   const res = await axios.get('/home/index')
//   console.log(res)
// } 
// test()


</script>
<style lang="less" scoped>
// 测试全局样式
// 必须导入variables.less
// @import '@/assets/styles/variables.less';
// @import '@/assets/styles/mixins.less';
h1 {
  background-color: @warnColor;
  .hoverShadow();
}
</style>