/**
* Created by huangling on 09/06/2018.
*/
<template>
    <main-layout>
        <div class="container">
            <left-menu :items="items">

            </left-menu>
            <p>Machine page</p>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue';
    import LeftMenu from '../components/LeftMenu.vue';
    export default {
        components: {
            MainLayout,
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
    }
</style>