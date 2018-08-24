/**
* Created by huangling on 06/08/2018.
*/
<template>
    <el-dialog
            :title="customer.id ? '编辑客户' : '新建客户'"
            :visible="visible"
            width="30%"
    >
        <el-form :model="customer" label-width="120px">
            <el-form-item label="客户名称">
                <el-input v-model="customer.name"></el-input>
            </el-form-item>
            <el-form-item label="类型">
                <el-radio-group v-model="customer.type">
                    <el-radio label="company">公司</el-radio>
                    <el-radio label="person">个人</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="公司名称" v-if="customer.type === 'company'">
                <el-input v-model="customer.company"></el-input>
            </el-form-item>

            <el-form-item label="联系电话">
                <el-input v-model="customer.mobile"></el-input>
            </el-form-item>
            <el-form-item label="邮件">
                <el-input v-model="customer.email"></el-input>
            </el-form-item>
            <el-form-item label="联系地址">
                <el-input v-model="customer.address"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="onCancel">取消</el-button>
            <el-button type="primary" @click="onConfirm">确定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        props: ['onOk', 'visible', 'onCancel', 'customer'],
        methods: {
            onConfirm: function () {
                if (!this.customer.name) {
                    this.$message.error('请输入客户名称');
                } else if (!this.customer.type) {
                    this.$message.error('请选择类型');
                } else {
                    this.onOk(Object.assign({}, this.customer));
                    this.onCancel();
                }
            }
        }
    }
</script>

<style>

</style>