/**
* Created by huangling on 06/08/2018.
*/
<template>
    <el-dialog title="新建协议" visible width="30%">
        <div>名称</div>
        <el-input v-model="name"></el-input>
        <el-upload ref="upload"
                   action="/deviceType/upload"
                   :show-file-list="false"
                   :on-change="onImport"
        >
            <el-button type="primary" size="small">导入格式</el-button>
        </el-upload>

        <div v-show="fileList.length > 0">

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
                name: '',
                protocol: '',
                fileList: []
            };
        },
        methods: {
            onImport: function (files, fileList) {
                console.log(files);
                console.log(fileList);
                Service.importType(() => {
                });
            },
            onConfirm: function () {
                if (!this.prefix) {
                    this.$message.error('请输入类型前缀');
                } else if (!this.name) {
                    this.$message.error('请输入名称');
                } else {
                    this.onOk({
                        name: this.name,
                        protocol: this.protocol
                    });
                }
            }
        }
    }
</script>

<style>

</style>