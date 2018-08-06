/**
* Created by huangling on 06/08/2018.
*/
<template>
    <el-dialog
            :title="id ? '编辑机器' : '新建机器'"
            :visible.sync="dialogVisible"
            width="30%"
    >
        <div>机器名称</div>
        <el-input v-model="name"></el-input>

        <div>机器类型</div>
        <el-select v-model="type" placeholder="请选择类型">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <span slot="footer" class="dialog-footer">
                <el-button @click="onCancel">取消</el-button>
                <el-button type="primary" @click="onConfirm">确定</el-button>
            </span>
    </el-dialog>
</template>

<script>
    export default {
        props: ['onOk', 'dialogVisible', 'onCancel', 'machine'],
        data: function () {
            return {
                name: this.machine.name,
                id: this.machine.id,
                type: this.machine.type,
                options: [{label: 'type1', value: 't1'}]
            }
        },
        watch: {
            machine: function (machine) {
                this.name = machine.name;
                this.id = machine.id;
                this.type = machine.type;
            }
        },
        methods: {
            onConfirm: function () {
                this.onOk({
                    id: this.id,
                    name: this.name,
                    type: this.type,
                });
            }
        }
    }
</script>

<style>

</style>