/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <el-popover
                ref="popover"
                placement="right"
                width="400"
                trigger="click">
            <div>
                自动生成
                <el-input-number v-model="number" :min="1"></el-input-number>
                个机器码
            </div>
            <div>
                <el-button @click="closePopover">取消</el-button>
                <el-button type="primary" @click="generateCode">确定</el-button>
            </div>

            <el-button slot="reference">生成机器码</el-button>
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
                    <router-link to="/machine/list">{{scope.row.machine}}</router-link>
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
                tooltipActive: false,
                rows: [],
                columns: [
                    {title: '设备码', dataIndex: 'code'},
                    {title: '机器名', dataIndex: 'machine' },
                ],
                loading: true
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
                        machine: 'XXXX0' + i
                    });
                }

                this.rows = this.rows.concat(newRows);
                this.closePopover();
            },
            closePopover: function () {
                this.$refs.popover.doClose()
            }
        }
    }
</script>

<style scoped="">
    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .el-table {
        max-height: 500px;
        overflow: auto;
    }
</style>