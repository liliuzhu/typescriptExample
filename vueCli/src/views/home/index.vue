<template>
  <div class="home">
    <ul>
      <li v-for="(nav, index) in navigations" :key="index">
        <router-link :to="nav.path">{{nav.meta.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: "home",
    data() {
      return {}
    },
    mounted() {
      console.log(this.$router)
    },
    computed: {
      navigations() {
        return this.$router.options.routes.filter(item => item.meta && item.meta.isMenu)
      }
    }
  };
</script>
<style rel="stylesheet/css" type="text/css" lang="less">
  .home{
    padding: 0.1rem;
    font-size: 0.5rem;
  }
</style>
