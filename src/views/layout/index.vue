<script lang="ts" setup name="Layout">
import AppTopnav from './components/app-topnav.vue';
import AppHeader from './components/app-header.vue';
import AppFooter from './components/app-footer.vue';
import AppHeaderStick from './components/app-header-stick.vue';</script>
<template>
  <AppTopnav />
  <AppHeader />
  <AppHeaderStick />
  <main class="app-body">
  <!-- 导出路由 -->
  <RouterView />
  </main>
  <AppFooter />
</template>

<style lang="less" scoped>
.app-body{
  min-height: 666px;
}
</style>