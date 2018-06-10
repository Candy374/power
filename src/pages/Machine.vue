/**
* Created by huangling on 09/06/2018.
*/
<template>
    <div class="container">
        <left-menu :items="items"></left-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    import LeftMenu from '../components/LeftMenu.vue';
    export default {
        components: {
            LeftMenu
        },
        data: () => ({
            items: [{
                text: '设备列表',
                href: '/machine/list'
            }, {
                text: '设备码',
                href: '/machine/code'
            }, {
                text: '设备类型',
                href: '/machine/type'
            }]
        })
    }
</script>

<style>
    .container {
        display: flex;
        flex: 1;
    }
</style>