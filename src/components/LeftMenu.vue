/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="left-menu">
        <ul>
            <li v-for="item in items">
                <v-link :href="item.href" >{{item.text}}</v-link>
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
</style>