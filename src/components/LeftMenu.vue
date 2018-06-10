/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="left-menu">
        <div v-for="item in items" class="link">
            <router-link :to="item.href">{{item.text}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style scoped>
    .left-menu {
        width: 120px;
        border-right: 1px solid #ccc;
    }

    .link {
        margin: 1em;
        text-align: center;
    }

    .link a {
        color: #888;
        padding-bottom: 2px;
        border-bottom: 2px solid transparent;
    }

    .link:hover a {
        border-color: cornflowerblue;
    }

    a.router-link-active {
        color: #333;
        border-color: cornflowerblue;
    }
</style>