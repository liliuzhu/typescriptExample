<template>
  <div class="sweet_start">
    <header>
      <!--<img class="header_image" :src="getAssetsPath('header.png','sweetStart')" alt="footer">-->
    </header>
    <ul class="scroll_container"></ul>
    <footer>
      <img class="footer_image" src="./footer.png" alt="footer">
    </footer>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: "",
    data() {
      return {
        resources: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
      }
    }
  }
</script>
<style rel="stylesheet/css" type="text/css" lang="less">
  .sweet_start{
    height: 100%;
    display: flex;
    flex-direction: column;
    .scroll_container{
      flex: 1;
      overflow-y: auto;
      background-color: #fff;
    }
    .image_item, .header_image, .footer_image{
      width: 100%;
      display: block;
    }
  }
</style>
