/**
* Created by huangling on 06/08/2018.
*/
<template>
    <el-popover
            width="400" v-model="visible"
            trigger="click">
        请输入机器名
        <div>
            <el-input v-model="machineCode" ></el-input>
        </div>
        <div class="tool-buttons">
            <el-button  @click="visible = false;machineCode=''">取消</el-button>
            <el-button type="primary" @click="onConfirm"
                       :disabled="!machineCode.trim()"
            >确定</el-button>
        </div>

        <el-button slot="reference">绑定机器</el-button>
    </el-popover>
</template>

<script>
    export default {
        props: ['bindMachine'],
        data: function () {
            return {
                machineCode: '',
                visible: false
            }
        },
        methods: {
            onClose: function () {
                this.visible = false;
                this.machineCode = '';
            },
            onConfirm: function () {
                this.bindMachine(this.machineCode);
                this.onClose();
            }
        }
    }
</script>

<style>
    .tool-buttons {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
</style>