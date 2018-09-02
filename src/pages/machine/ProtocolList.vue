/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <div>
            <el-button type="primary" style="float: right;" @click="showDialog = true">新建协议</el-button>
        </div>
        <el-table :data="rows"
                  style="width: 100%"
                  stripe
                  height="500"
                  v-loading="loading"
        >
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="model" label="模版"></el-table-column>
            <el-table-column prop="desc" label="描述"></el-table-column>
            <el-table-column prop="createDate" label="创建日期">
                <template slot-scope="scope">
                    {{formatDate(scope.row.createDate)}}
                </template>
            </el-table-column>
            <el-table-column prop="action" label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="remove(scope.row)"></el-button>
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
        <div v-if="showDialog">
            <protocol-editor
                    :onOk="onCreateProtocol"
                    :onCancel="onCloseDialog"
            ></protocol-editor>
        </div>
    </div>
</template>

<script>
    import Service from '../../actions/index';
    import ProtocolEditor from './ProtocolEditor.vue';
    import moment from 'moment';

    export default {
        components: {
            ProtocolEditor
        },
        data: function () {
            return {
                number: 0,
                rows: [],
                total: 0,
                current: 1,
                loading: true,
                showDialog: '',
                protocolList: []
            }
        },
        created: function () {
            this.getProtocolListList();
        },
        methods: {
            getProtocolListList: function () {
                const vm = this;
                Service.getProtocolListList().then((data) => {
                    vm.rows = data;
                    vm.loading = false;
                    vm.total = vm.rows.length;
                });
            },
            onPageChange: function (current) {
                this.current = current;
            },
            onCreateType: function (list) {
                Service.addType(list).then((data) => {
                    this.getProtocolListList();
                });
            },
            onCreateProtocol: function (list) {
                Service.addType(list).then((data) => {
                    this.getProtocolListList();
                });
            },
            onExport: function () {
                console.log('export')
            },
            remove: function (row) {
                Service.deleteProtocolType(row.id);
            },
            formatDate: function (date) {
                return moment(date).format('YYYY-MM-DD HH:mm:ss');
            },
            onCloseDialog: function () {
                this.showDialog = null;
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