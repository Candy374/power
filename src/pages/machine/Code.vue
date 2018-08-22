/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <div>
            <el-button style="float: right" @click="showCreateCodeDialog = true">生成设备码</el-button>
        </div>
        <el-table :data="rows"
                  style="width: 100%"
                  stripe
                  height="500"
                  v-loading="loading"
        >
            <el-table-column prop="id" label="批次" ></el-table-column>
            <el-table-column prop="name" label="批次名称"></el-table-column>
            <el-table-column prop="num" label="数量"></el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="creator" label="操作人"></el-table-column>
            <el-table-column prop="action" label="操作">
                <template slot-scope="scope">
                    <el-button @click="onExport" type="text">导出</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                background
                layout="prev, pager, next"
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
                columns: [
                    {title: '设备码', dataIndex: 'code'},
                    {title: '机器名', dataIndex: 'machine' },
                ],
                loading: true,
                showCreateCodeDialog: false
            }
        },
        created: function () {
            this.getCodeList();
        },
        methods: {
            getCodeList: function () {
                const vm = this;
                Service.getCode().then((data) => {
                    vm.rows = data;
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
            onOk: function (list) {
                Service.setCode(list).then((data) => {
                    this.getCodeList();
                });
            },
            onExport: function () {
                console.log('export')
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