/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <el-table  :data="rows" v-loading="loading"
        >
            <el-table-column prop="name"  label="机器名" width="180">
                <template slot-scope="scope">
                    <router-link to="/log">{{scope.row.name}}</router-link>
                </template>
            </el-table-column>
            <el-table-column  prop="code"  label="设备码" width="180">
                <template slot-scope="scope">
                    <router-link to="code">{{scope.row.code}}</router-link>
                </template>
            </el-table-column>
            <el-table-column  prop="customer" label="客户名" >
                <template slot-scope="scope">
                    <router-link to="/customer">{{scope.row.customer}}</router-link>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" width="180">
            </el-table-column>
            <el-table-column  prop="type"  label="类型"  width="180">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import Service from '../../actions/index';

    export default {
        data: function () {
            const vm = this;
            return {
                rows: [],
                columns: [
                    {title: '机器名', dataIndex: 'name'},
                    {title: '设备码', dataIndex: 'code'},
                    {title: '客户名', dataIndex: 'customer'},
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