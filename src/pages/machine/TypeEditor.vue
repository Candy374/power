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
            <el-upload ref="upload"
                       action="/deviceType/upload"
                       :show-file-list="false"
                       :on-change="onImport"
            >
                <el-button type="primary" size="small">导入格式</el-button>
            </el-upload>
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
                fileList: []
            };
        },
        methods: {
            onImport: function (files, fileList) {
                console.log(files);
                console.log(fileList);
                Service.importType(() => {

                })
            },
            onConfirm: function () {
                if (!this.prefix) {
                    this.$message.error('请输入类型前缀');
                } else if (!this.name) {
                    this.$message.error('请输入名称');
                } else {
                    this.onOk({
                        prefix: this.prefix,
                        name: this.name,
                        setting: this.setting
                    });
                }
            }
        }
    }
</script>

<style>

</style>