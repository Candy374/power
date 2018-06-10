/**
 * Created by huangling on 09/06/2018.
 */
<template>
 <div class="app-container">
  <title-bar></title-bar>
  <slot></slot>
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

<style>
 .app-container {
  max-width: 1200px;
  margin: 0 auto;
  background: #f0f0f0;
  height: 100vh;
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