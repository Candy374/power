/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <div>
            <el-button type="primary" style="float: right;" @click="showDialog = true">新建类型</el-button>
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
            <el-table-column prop="status" label="状态">
                <template slot-scope="scope">
                    <div v-if="scope.row.status === 'publish'">
                        已发布
                    </div>
                    <div v-else>
                        草稿
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="action" label="操作">
                <template slot-scope="scope">
                    <span v-if="scope.row.status !== 'publish'">
                        <el-button type="primary" icon="el-icon-message" circle></el-button>
                         <el-button type="primary" icon="el-icon-edit" circle></el-button>
                         <el-button type="danger" icon="el-icon-delete" circle @click="remove(scope.row)"></el-button>
                        <el-button type="text">发布</el-button>
                    </span>
                    <span v-else>
                        <el-button type="primary" icon="el-icon-message" circle></el-button>
                    </span>
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
            <type-editor
                    :onOk="onCreateType"
                    :onCancel="onCloseDialog"
                    :protocolList="protocolList"
            ></type-editor>
        </div>
    </div>
</template>

<script>
    import Service from '../../actions/index';
    import TypeEditor from './TypeEditor.vue';
    import moment from 'moment';

    export default {
        components: {
            TypeEditor,
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
            this.getTypeList();
            this.getProtocolListList();
        },
        methods: {
            getTypeList: function () {
                const vm = this;
                Service.getTypeList().then((data) => {
                    vm.rows = data;
                    vm.loading = false;
                    vm.total = vm.rows.length;
                });
            },
            getProtocolListList: function () {
                const vm = this;
                Service.getProtocolListList().then((data) => {
                    vm.protocolList = data;
                    vm.loading = false;
                });
            },
            onPageChange: function (current) {
                this.current = current;
            },
            onCreateType: function (list) {
                Service.addType(list).then((data) => {
                    this.getTypeList();
                });
            },
            onExport: function () {
                console.log('export')
            },
            remove: function (row) {
                Service.deleteType(row.id);
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