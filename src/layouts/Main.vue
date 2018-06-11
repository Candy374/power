/**
 * Created by huangling on 09/06/2018.
 */
<template>
 <div class="app-container">
  <title-bar></title-bar>
  <router-view></router-view>
 </div>
</template>

<script>
    import TitleBar from '../components/TitleBar.vue'
    export default {
        components: {
            TitleBar
        }
    }
</script>

<style lang="scss">
 .app-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
 }

 body {
  margin: 0;
  font-family: "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans GB", "Microsoft YaHei", "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
 }

 ul {
  margin: 0;
  padding: 0;
 }

 li {
  list-style: none;
 }

 a {
  text-decoration: none;
 }
</style>