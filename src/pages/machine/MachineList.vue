/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <el-table  :data="rows" v-loading="loading"
        >
            <el-table-column prop="id"  label="机器ID"></el-table-column>
            <el-table-column  prop="code"  label="设备码" ></el-table-column>
            <el-table-column prop="status" label="状态" ></el-table-column>
            <el-table-column  prop="count"  label="连接次数"  ></el-table-column>
            <el-table-column  prop="location"  label="地理位置"  ></el-table-column>
            <el-table-column  prop="type"  label="类型"  ></el-table-column>
            <el-table-column  prop="statistic"  label="实时数据"  ></el-table-column>
            <el-table-column  prop="registerTime"  label="注册时间"  ></el-table-column>
            <el-table-column  prop="lastUpdate"  label="更新时间"  ></el-table-column>

        </el-table>
    </div>
</template>

<script>
    import Service from '../../actions/index';

    export default {
        data: function () {
            return {
                rows: [],
                loading: true,
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
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
</style>