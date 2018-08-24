About.vue/**
* Created by huangling on 09/06/2018.
*/
<template>
    <div class="container">
        <div class="title">
            <div style="display: flex;">
                <el-radio-group v-model="filter.type" @change="getData">
                    <el-radio-button label="all">全部</el-radio-button>
                    <el-radio-button label="company">公司</el-radio-button>
                    <el-radio-button label="person">个人</el-radio-button>
                </el-radio-group>
                <el-input v-model="filter.search" class="input-with-select" style="width: 300px; margin-left: 10px;">
                    <el-button slot="append" icon="el-icon-search" @click="getData" clearable></el-button>
                </el-input>
            </div>

            <el-button style="float: right" type="primary" @click="newCustomer">新建客户</el-button>
        </div>
        <el-table  :data="rows" v-loading="loading">
            <el-table-column label="客户名" prop="name"></el-table-column>
            <el-table-column label="公司名" prop="company"></el-table-column>
            <el-table-column label="地址" prop="address"></el-table-column>
            <el-table-column label="联系电话" prop="mobile"></el-table-column>
            <el-table-column label="关联设备" prop="machine">
                <template slot-scope="scope">
                    <el-button @click="showMachineList(scope.row.id)" type="text">显示关联设备</el-button>
                </template>
            </el-table-column>
            <el-table-column prop="action" label="操作">
                <template slot-scope="scope">
                    <el-button @click="editCustomer(scope.row)" type="text">编辑</el-button>
                    <el-button @click="showResetCode(scope.row.id)" type="text">重置密码</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="重置密码" :visible.sync="!!resetPasswordDialog.id">
            <el-form>
                <el-form-item label="密码">
                    <el-input v-model="resetPasswordDialog.password"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="resetPasswordDialog={}">取消</el-button>
                <el-button type="primary" @click="resetPassword">确认</el-button>
            </span>
        </el-dialog>
        <customer-editor
                :visible="showCustomerDialog"
                :customer="customer"
                :onOk="getData"
                :onCancel="closeCustomerDialog"
        ></customer-editor>
    </div>
</template>

<script>
    import Service from '../actions';

    import CustomerEditor from './CustomerEditor.vue';
    export default {
        components: {
            CustomerEditor
        },
        data: () => ({
            rows: [],
            loading: true,
            filter: {
                type: 'all',
                search: ''
            },
            resetPasswordDialog: {
                id: '',
                password: '',
            },
            showCustomerDialog: false,
            customer: {}
        }),
        created: function () {
            this.getData();
        },
        methods: {
            getData: function () {
                const vm = this;
                Service.getCustomer(Object.assign({}, this.filter)).then((data) => {
                    vm.rows = data;
                    vm.searched = data;
                    vm.loading = false;
                });
            },
            customSort (value) {
                return value.sort((a, b) => {
                    const sortBy = this.currentSort;

                    if (this.currentSortOrder === 'desc') {
                        return a[sortBy].localeCompare(b[sortBy])
                    }

                    return b[sortBy].localeCompare(a[sortBy])
                })
            },
            showMachineList: function () {
                
            },
            showResetCode: function (id) {
                this.resetPasswordDialog.id = id;
            },
            resetPassword: function () {
                const { id, password } = this.resetPasswordDialog;
                Service.resetPassword(id, password).then((result) => {
                    if (result.result === 'success') {
                        this.resetPasswordDialog = {};
                    } else {
                        this.$message.error('重置密码失败');
                    }
                })
            },
            newCustomer: function () {
                this.showCustomerDialog = true;
                this.customer = {};
            },
            editCustomer: function (customer) {
                this.showCustomerDialog = true;
                this.customer = customer;
            },
            closeCustomerDialog: function () {
                this.showCustomerDialog = false;
            }
        }
    }
</script>
<style scoped="">
    .container {
        margin: 15px 0;
    }

    .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
</style>
