/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="left-menu">
        <ul>
            <li v-for="item in items">
                <router-link :to="item.href" class="link">{{item.text}}</router-link>
            </li>
        </ul>
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
        data: () => ({
            active: ''
        }),
        methods: {
            go (event) {
                event.preventDefault();
                this.$root.currentRoute = this.href;
                window.history.pushState(
                    null,
                    routes[this.href],
                    this.href
                )
            }
        },
    }
</script>

<style scoped>
    .left-menu {
        width: 200px;
        padding: 10px;
    }

    .link {
        padding: 0 1em;
        color: #000;
    }

    .router-link-active {
        color: cornflowerblue;
    }
</style>