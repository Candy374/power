/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="left-menu">
        <el-menu router :default-active="defaultActive">
            <el-menu-item
                    v-for="item in items"
                    :index="item.href"
                    :key="item.id"
            >
                {{item.text}}
            </el-menu-item>
        </el-menu>
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
        data: () => {
            const defaultActive = location.hash.replace('#', '');
            return {
                defaultActive
            }
        },
        watch: {
            '$route' (to, from) {
                // 对路由变化作出响应...
                this.defaultActive = to.path;
            }
        }
    }
</script>

<style scoped lang="scss">
    .left-menu {
        width: 120px;

        .el-menu {
            height: 100%;
        }
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
        text-decoration: none;
    }

    a.router-link-active {
        color: #333;
        border-color: cornflowerblue;
    }
</style>