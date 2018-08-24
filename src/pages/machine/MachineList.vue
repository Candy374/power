/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <div v-show="machine.id">
            <div>
                <el-button type="primary" @click="machine={}">返回</el-button>
            </div>
            <el-table :data="machine.rows" v-loading="loading">
                <el-table-column prop="dateCreated"  label="时间"></el-table-column>
                <el-table-column  prop="voltage"  label="电压">
                    <template slot-scope="scope">
                        <div>A相：{{scope.row.voltageA}}</div>
                        <div>B相：{{scope.row.voltageB}}</div>
                        <div>C相：{{scope.row.voltageC}}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="intensity" label="电流">
                    <template slot-scope="scope">
                        <div>A相：{{scope.row.intensityA}}</div>
                        <div>B相：{{scope.row.intensityB}}</div>
                        <div>C相：{{scope.row.intensityC}}</div>
                    </template>
                </el-table-column>
                <el-table-column  prop="count"  label="功率因素"></el-table-column>
                <el-table-column  prop="location"  label="电压畸变率"></el-table-column>
                <el-table-column  prop="type"  label="电流畸变率"></el-table-column>
            </el-table>
        </div>
        <div v-show="!machine.id">
            <el-table :data="rows" v-loading="loading">
                <el-table-column prop="id"  label="机器ID"></el-table-column>
                <el-table-column  prop="code"  label="设备码" ></el-table-column>
                <el-table-column prop="status" label="状态" ></el-table-column>
                <el-table-column  prop="count"  label="连接次数"  ></el-table-column>
                <el-table-column  prop="location"  label="地理位置"  ></el-table-column>
                <el-table-column  prop="type"  label="类型"  ></el-table-column>
                <el-table-column  prop="registerTime"  label="注册时间"  ></el-table-column>
                <el-table-column  prop="lastUpdate"  label="更新时间"  ></el-table-column>
                <el-table-column prop="action" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="onDetail(scope.row.id)" type="text">显示详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import Service from '../../actions/index';

    export default {
        data: function () {
            return {
                rows: [],
                loading: true,
                machine: {},
            }
        },
        created: function () {
            const vm = this;
            Service.getMachineList().then((data) => {
                vm.rows = data;
                vm.loading = false;
            });
        },
        methods: {
            onDetail: function (machineId) {
                const vm = this;
                vm.machine = {
                    id: machineId,
                    rows: []
                };
                vm.loading = true;
                Service.getMachineStatus(machineId).then((data) => {
                    vm.machine.rows = data.rows;
                    vm.loading = false;
                    vm.machine.total = data.total;
                });
            },
        }
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