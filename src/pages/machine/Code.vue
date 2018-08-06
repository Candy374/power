/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <el-popover
                ref="getCodePopover"
                placement="bottom"
                width="400"
                trigger="click">
            <div>
                自动生成
                <el-input-number v-model="number" :min="1"></el-input-number>
                个机器码
            </div>
            <div class="tool-buttons">
                <el-button @click="closePopover">取消</el-button>
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
                        <el-popover
                                ref="bindMachinePopover"
                                width="400"
                                trigger="click">
                            请输入机器名
                            <div>
                                <el-input v-model="machineCode" ></el-input>
                            </div>
                            <div class="tool-buttons">
                                <el-button @click="closeBindMachinePopover">取消</el-button>
                                <el-button type="primary" @click="bindMachine"
                                           :disabled="!machineCode.trim()"
                                >确定</el-button>
                            </div>

                            <el-button slot="reference">绑定机器</el-button>
                        </el-popover>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
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
        data: function () {
            return {
                number: 0,
                rows: [],
                columns: [
                    {title: '设备码', dataIndex: 'code'},
                    {title: '机器名', dataIndex: 'machine' },
                ],
                loading: true,
                machineCode: ''
            }
        },
        created: function () {
            const vm = this;
            Service.getCode().then((data) => {
                vm.rows = data;
                vm.loading = false;
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
                this.closePopover();
            },
            closePopover: function () {
                this.$refs.getCodePopover.doClose()
            },
            closeBindMachinePopover: function () {
                this.$refs.bindMachinePopover.doClose()
            },
            bindMachine: function () {
                console.log(`bind Machine ${this.machineCode}`);
                this.closeBindMachinePopover();
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