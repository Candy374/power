/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <p-table
            title="机器列表"
            :loading="loading"
            :dataSource="rows"
            :columns="columns"
        >
            <template slot="name" slot-scope="scope">
                <router-link to="/log">{{scope.slotValue}}</router-link>
            </template>
            <template slot="code" slot-scope="scope">
                <router-link to="/machine/code">{{scope.slotValue}}</router-link>
            </template>
            <template slot="customer" slot-scope="scope">
                <router-link to="/customer">{{scope.slotValue}}</router-link>
            </template>
        </p-table>
    </div>
</template>

<script>
    import PTable from '../../components/Table.vue';
    import Service from '../../actions/index';

    export default {
        components: {
            PTable
        },
        data: function () {
            const vm = this;
            return {
                rows: [],
                columns: [
                    {title: '机器名', dataIndex: 'name', slot: true },
                    {title: '设备码', dataIndex: 'code', slot: true},
                    {title: '客户名', dataIndex: 'customer', slot: true},
                    {title: '状态', dataIndex: 'status'},
                    {title: '类型', dataIndex: 'type'},
                ],
                loading: true
            }
        },
        created: function () {
            const vm = this;
            Service.getMachine().then((data) => {
                vm.rows = data;
                vm.loading = false;
            });
        },
    }
</script>

<style scoped="">
    .container {
        flex: 1;
    }
</style>