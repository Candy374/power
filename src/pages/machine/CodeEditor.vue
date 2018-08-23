/**
* Created by huangling on 06/08/2018.
*/
<template>
    <el-dialog
            @close="onCancel"
            title="生成设备码"
            visible
            width="30%"
    >
        <div>数量</div>
        <el-input-number v-model="count" :min="1"></el-input-number>
        <div>批次名称</div>
        <el-input v-model="name"></el-input>

        <div>设备类型</div>
        <el-select v-model="deviceType" placeholder="请选择类型">
            <el-option
                    v-for="item in typeList"
                    :key="item.id"
                    :label="item.prefix + item.name"
                    :value="item.id">
            </el-option>
        </el-select>

        <span slot="footer" class="dialog-footer">
                <el-button @click="onCancel">取消</el-button>
                <el-button deviceType="primary" @click="generateCode">确定</el-button>
            </span>
    </el-dialog>
</template>

<script>
    import Service from '../../actions/index';
    const getRandomLetter = () => String.fromCharCode(Math.floor(Math.random() * (120 - 65)) + 65);
    const getRandomCode = () => {
        let letter = '';
        for (let i = 0; i< 6; i++) {
            letter += getRandomLetter();
        }
        return letter;
    };

    export default {
        props: ['onOk', 'dialogVisible', 'onCancel'],
        data: function () {
            return {
                count: 0,
                name: '',
                deviceType: '',
                typeList: []
            }
        },
        created: function () {
            const vm = this;
            Service.getTypeList().then((types) => {
                vm.typeList = types;
            })
        },
        methods: {
            generateCode: function () {
                const codeList = [];
                for (let i = 0; i < this.count; i++) {
                    codeList.push({
                        code: getRandomCode(),
                    });
                }

                this.onOk({
                    name: this.name,
                    count: this.count,
                    deviceType: this.deviceType,
                    codeList: codeList,
                    date: new Date().toLocaleString(),
                });
                this.onCancel();
            },
        }
    }
</script>

<style>

</style>