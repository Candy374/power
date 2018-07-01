/**
* Created by huangling on 10/06/2018.
*/
<template>
    <el-menu router class="title-bar">
        <div class="left">
            <el-menu-item v-for="item in items" :index="item.to">
                {{item.text}}
            </el-menu-item>
        </div>
        <div>
            <div class="author-card">
                <div class="author-image"><img :src="img" :alt="name"></div>
                <div class="author-card-info">
                    <span>{{ name }}</span>
                </div>
            </div>
        </div>
    </el-menu>
</template>

<script>
    export default {
        data: () => ({
            toggleCard: false,
            img: '/src/img/Candy.jpeg',
            name: 'candy',
            items: [
                {to: '/machine', text: '设备管理'},
                {to: '/customer', text: '客户'},
                {to: '/log', text: '日志'}
            ]
        }),
        methods: {
            toggle () {
                this.toggleCard = !this.toggleCard
            }
        },
    }
</script>

<style scoped lang="scss">
    .title-bar {
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 15px;

        &:before, &:after {
            content: none;
        }
    }

    .left {
        display: flex;
    }

    .author-card {
        display: flex;
        align-items: center;
    }

    .author-image {
        max-width: 2em;
        height: 2em;
        margin-right: 15px;
    }

    .author-image img {
        max-width: 100%;
        max-height: 100%;
        border: 2px solid #fff;
        border-radius: 50%;
        box-shadow: 0 0 3px #000;
    }

    .link {
        padding: 0 1em;
        color: #000;
    }

    .router-link-active {
        color: cornflowerblue;
    }
</style>