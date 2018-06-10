/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="title-bar">
        <ul>
            <li>
                <v-link href="/machine">设备管理</v-link>
                <v-link href="/customer">客户</v-link>
                <v-link href="/log">日志</v-link>
            </li>
        </ul>
        <ul>
            <li>
                <div class="author-card">
                    <div class="author-image"><img :src="img" :alt="name"></div>
                    <div class="author-card-info">
                        <span>{{ name }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import VLink from '../components/VLink.vue'
    export default {
        components: {
            VLink
        },
        data: () => ({
            toggleCard: false,
            img: '/src/img/Candy.jpeg',
            name: 'candy'
        }),
        methods: {
            toggle () {
                this.toggleCard = !this.toggleCard
            }
        },
    }
</script>

<style scoped>
    .title-bar {
        border-bottom: 1px solid #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
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
</style>