/**
* Created by huangling on 09/06/2018.
*/
<template>
    <div class="container">
        <el-button @click="showFilter=!showFilter">
            {{showFilter ? '隐藏' : '打开筛选'}}
            <i :class="showFilter ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
        </el-button>

        <div v-show="showFilter" class="filter-container">
            <el-form :model="filter" label-width="120px">
                <el-form-item label="操作人">
                    <el-input v-model="filter.name"></el-input>
                </el-form-item>
                <el-form-item label="时间">
                    <el-date-picker
                            v-model="filter.date"
                            type="datetimerange"
                            range-separator="To"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            align="right">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="操作类别">
                    <el-radio-group v-model="filter.type">
                        <el-radio label="company">公司</el-radio>
                        <el-radio label="person">个人</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="onClear">清除筛选</el-button>
                <el-button type="primary" @click="getData">搜索</el-button>
            </span>
        </div>
        <el-table :data="rows" style="width: 100%" stripe
                  :default-sort = "{prop: 'time', order: 'descending'}"
                  v-loading="loading"
        >
            <el-table-column prop="dateCreated" label="时间" sortable  width="200">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.dateCreated }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="operation"
                    label="操作类型"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="operationData"
                    label="数据"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="operationInfo"
                    label="内容" >
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="total, prev, pager, next"
                style="float: right"
                v-show="total > 20"
                :total="total"
                :current-page="filter.current"
                @current-change="getData"
                @prev-click="getData"
                @next-click="getData"
        >
        </el-pagination>
    </div>
</template>

<script>
    import Service from '../actions';
    import ElIcon from "../../node_modules/element-ui/packages/icon/src/icon";

    export default {
        components: {ElIcon},
        data: () => ({
            filter: {
                current: 1
            },
            rows: [],
            total: 0,
            loading: true,
            showFilter: false
        }),
        created: function () {
            this.getData();
        },
        methods: {
            getData: function () {
                const vm = this;
                Service.getLog(Object.assign({}, this.filter)).then((data) => {
                    vm.rows = data.rows;
                    vm.total = data.total;
                    vm.filter.current = data.page;
                    vm.loading = false;
                });
            },
            onClear: function () {
                this.filter = {current: 1};
            },
        }
    }
</script>
<style scoped="">
    .container {
        margin: 15px 0;
    }

    .dialog-footer {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 15px;
    }

    .filter-container {
        background: #eee;
        padding: 20px 20px 10px;
        margin-top: 10px;
    }
</style>