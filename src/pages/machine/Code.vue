/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <el-popover width="400" trigger="click" v-model="visible">
            <div>
                自动生成
                <el-input-number v-model="number" :min="1"></el-input-number>
                个机器码
            </div>
            <div class="tool-buttons">
                <el-button @click="visible = false">取消</el-button>
                <el-button type="primary" @click="generateCode">确定</el-button>
            </div>

            <el-button slot="reference" style="float: right">生成机器码</el-button>
        </el-popover>

        <el-table :data="rows" style="width: 100%" stripe
                  v-loading="loading"
        >
            <el-table-column
                    prop="code"
                    label="设备码" >
            </el-table-column>
            <el-table-column
                    prop="machine"
                    label="机器名">
                <template slot-scope="scope">
                    <router-link v-if="scope.row.machine" to="list">{{scope.row.machine}}</router-link>
                    <div v-else>
                        <bind-machine :bindMachine="bindMachine"/>
                    </div>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                v-if="total > 20"
        >
        </el-pagination>
    </div>
</template>

<script>
    import Service from '../../actions/index';
    import BindMachine from './BindMachine.vue';

    const getRandomLetter = () => String.fromCharCode(Math.floor(Math.random() * (120 - 65)) + 65);
    const getRandomCode = () => {
        let letter = '';
        for (let i = 0; i< 6; i++) {
            letter += getRandomLetter();
        }
        return letter;
    };

    export default {
        components: {
            BindMachine
        },
        data: function () {
            return {
                number: 0,
                rows: [],
                total: 0,
                columns: [
                    {title: '设备码', dataIndex: 'code'},
                    {title: '机器名', dataIndex: 'machine' },
                ],
                loading: true,
                visible: false
            }
        },
        created: function () {
            const vm = this;
            Service.getCode().then((data) => {
                vm.rows = data;
                vm.loading = false;
                vm.total = vm.rows.length;
            });
        },
        methods: {
            generateCode: function () {
                const newRows = [];
                for (let i = 0; i < this.number; i++) {
                    newRows.push({
                        code: getRandomCode(),
                    });
                }

                this.rows = this.rows.concat(newRows);
                this.visible = false;
            },
            bindMachine: function (aaa) {
                console.log(aaa)
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

    .el-table {
        max-height: 500px;
        overflow: auto;
    }

    .tool-buttons {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
</style>