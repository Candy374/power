/**
* Created by huangling on 10/06/2018.
*/
<template>
    <el-menu router class="title-bar" :default-active="defaultActive">
        <div class="left">
            <el-menu-item v-for="item in items" :index="item.to" :key="item.id">
                {{item.text}}
            </el-menu-item>
        </div>
        <div>
            <el-dropdown>
                <div class="author-card">
                    <div class="author-image"><img :src="img" :alt="name"></div>
                    <div class="author-card-info">
                        <span>{{ name }}</span>
                    </div>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-if="isAdmin">
                        <el-button @click="userManage" type="text">
                            用户管理
                        </el-button>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-button @click="logout" type="text">
                            退出
                        </el-button>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-menu>
</template>

<script>
    import Service from '../actions';

    export default {
        data: () => {
            const items = [
                {to: '/machine', text: '设备管理'},
                {to: '/customer', text: '客户'},
                {to: '/log', text: '日志'}
            ];

            const hash = location.hash.replace('#', '');
            const activeItem = items.find(item => hash.indexOf(item.to) > -1);

            return {
                toggleCard: false,
                img: './src/img/Candy.jpeg',
                name: 'candy',
                items,
                defaultActive: activeItem ? activeItem.to : '',
                isAdmin: false
            };
        },
        created: function () {
            Service.getUser().then((user) => {
                this.isAdmin = user.isAdmin;
            });
        },
        methods: {
            logout () {
                // TODO: logout
                Service.logout();
            },
            userManage () {
                this.$router.push('/userManager');
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
</style>