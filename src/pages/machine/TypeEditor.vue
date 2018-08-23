/**
* Created by huangling on 06/08/2018.
*/
<template>
    <el-dialog title="新建类型" visible width="30%">
        <div>前缀</div>
        <el-input v-model="prefix"></el-input>
        <div style="margin-top: 10px">名称</div>
        <el-input v-model="name"></el-input>

        <div style="margin-top: 10px;">
            <el-button @click="onImport">导入格式</el-button>
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
        props: ['onOk', 'dialogVisible', 'onCancel'],
        data: function () {
            return {
                prefix: 0,
                name: '',
                setting: {}
            };
        },
        methods: {
            onImport: function () {
                Service.importType(() => {

                })
            },
            onConfirm: function () {
                this.onOk({
                    prefix: this.prefix,
                    name: this.name,
                    setting: this.setting
                })
            }
        }
    }
</script>

<style>

</style>