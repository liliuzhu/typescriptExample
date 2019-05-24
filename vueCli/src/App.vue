<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style rel="stylesheet/css" type="text/css" lang="less">
  @import "./assets/fonts/HappyZcool/HappyZcool";
  @import "./assets/style/reset.css";

  html, body {
    height: 100%;
  }

  #app {
    height: 100%;
    position: relative;
    overflow: hidden;
  }
</style>
