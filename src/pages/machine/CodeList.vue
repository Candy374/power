/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <div>
            <el-button style="float: right" type="primary" @click="showCreateCodeDialog = true">生成设备码</el-button>
        </div>
        <el-table :data="rows"
                  style="width: 100%"
                  stripe
                  height="500"
                  v-loading="loading"
        >
            <el-table-column prop="id" label="批次" ></el-table-column>
            <el-table-column prop="name" label="批次名称"></el-table-column>
            <el-table-column prop="count" label="数量"></el-table-column>
            <el-table-column prop="deviceType" label="类型"></el-table-column>
            <el-table-column prop="dateCreated" label="日期"></el-table-column>
            <el-table-column prop="creator" label="操作人"></el-table-column>
            <el-table-column prop="action" label="操作">
                <template slot-scope="scope">
                    <el-button @click="onDetail(scope.row.id)" type="text">显示详情</el-button>
                    <el-button @click="onExport(scope.row.id)" type="text">导出</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                background
                layout="total, prev, pager, next"
                :total="total"
                v-show="total > 20"
                :current-page="current"
                @current-change="onPageChange"
                @prev-click="onPageChange"
                @next-click="onPageChange"
        >
        </el-pagination>
        <div v-if="showCreateCodeDialog">
            <code-editor
                    :onOk="onOk"
                    :onCancel="onCancel"
            ></code-editor>
        </div>
    </div>
</template>

<script>
    import Service from '../../actions/index';
    import CodeEditor from './CodeEditor.vue';
    export default {
        components: {
            CodeEditor
        },
        data: function () {
            return {
                number: 0,
                rows: [],
                total: 0,
                current: 1,
                loading: true,
                showCreateCodeDialog: false
            }
        },
        created: function () {
            this.getBatchList();
        },
        methods: {
            getBatchList: function () {
                const vm = this;
                Service.getBatchList().then((data) => {
                    vm.rows = data.rows;
                    vm.loading = false;
                    vm.total = vm.rows.length;
                });
            },
            onPageChange: function (current) {
                this.current = current;
            },
            onCancel: function () {
                this.showCreateCodeDialog = false
            },
            onOk: function (code) {
                Service.addCode(code).then((data) => {
                    this.getBatchList();
                });
            },
            onExport: function (id) {
                Service.exportCode(id);
            },
            onDetail: function (id) {
                // todo: show detail ?
                //Service.getCodeList(id);
            }
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

    .el-pagination {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
    }

    .tool-buttons {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
</style>