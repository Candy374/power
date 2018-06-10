/**
 * Created by huangling on 09/06/2018.
 */
<template>
 <div class="container">
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

<style scoped>
 .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 30px;
  background: #f9f7f5;
 }
</style>