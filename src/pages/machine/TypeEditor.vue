/**
* Created by huangling on 06/08/2018.
*/
<template>
    <el-dialog title="新建类型" visible width="30%">
        <div>名称</div>
        <el-input v-model="name"></el-input>
        <div style="margin-top: 10px">描述</div>
        <el-input v-model="description"></el-input>

        <div style="margin-top: 10px">设备协议</div>
        <div>
            <el-select v-model="protocol" placeholder="请选择协议">
                <el-option
                        v-for="item in protocolList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>

        <span slot="footer" class="dialog-footer">
                <el-button @click="onCancel">取消</el-button>
                <el-button type="primary" @click="onConfirm">确定</el-button>
            </span>
    </el-dialog>
</template>

<script>
    import Service from '../../actions/index';

    export default {
        props: ['onOk', 'dialogVisible', 'onCancel', 'protocolList'],
        data: function () {
            return {
                description: '',
                name: '',
                protocol: '',
            };
        },
        methods: {
            onConfirm: function () {
                if (!this.name) {
                    this.$message.error('请输入名称');
                } else {
                    const protocol = protocolList.find(p => p.id === protocol);
                    this.onOk({
                        description: this.description,
                        name: this.name,
                        protocol
                    });
                }
            }
        }
    }
</script>

<style>

</style>