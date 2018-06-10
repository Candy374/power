/**
 * Created by huangling on 09/06/2018.
 */
<template>
<a
v-bind:href="href"
v-bind:class="{ active: isActive, link: true }"
v-on:click="go"
    >
    <slot></slot>
    </a>
    </template>

    <script>
import routes from '../routes'
export default {
    props: {
        href: {
            type:String,
            required: true
        }
    },
    computed: {
        isActive () {
            return this.href === this.$root.currentRoute
        }
    },
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
    }
}
</script>

<style scoped>
    .link {
        padding: 0 1em;
        color: #000;
    }

    .active {
        color: cornflowerblue;
    }
</style>