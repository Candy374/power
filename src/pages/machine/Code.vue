/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <p-table
                title="设备码列表"
                :loading="loading"
                :dataSource="rows"
                :columns="columns"
        >
            <template slot="title">
                <md-button
                        class="md-raised md-primary"
                        @click="tooltipActive = !tooltipActive"
                >
                    生成机器码
                    <md-tooltip :md-active.sync="tooltipActive">
                        <md-card>
                            <md-card-content>
                                自动生成
                                <md-input type="number">{{number}}</md-input>
                                个机器码
                            </md-card-content>
                            <md-card-actions>
                                <md-button>取消</md-button>
                                <md-button>确定</md-button>
                            </md-card-actions>
                        </md-card>

                    </md-tooltip>
                </md-button>

            </template>
            <template slot="machine" slot-scope="scope">
                <router-link to="/machine/list">{{scope.slotValue}}</router-link>
            </template>
        </p-table>
    </div>
</template>

<script>
    import PTable from '../../components/Table.vue';
    import Service from '../../actions/index';

    export default {
        components: {
            PTable
        },
        data: function () {
            return {
                number: 0,
                tooltipActive: false,
                rows: [],
                columns: [
                    {title: '设备码', dataIndex: 'code'},
                    {title: '机器名', dataIndex: 'machine', slot: true },
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
    }
</script>

<style scoped="">
    .container {
        flex: 1;
    }
</style>