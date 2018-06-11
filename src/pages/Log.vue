/**
* Created by huangling on 09/06/2018.
*/
<template>
        <log-table :columns="columns" :dataSource="rows">

        </log-table>
</template>

<script>
    import LogTable from '../components/Table.vue';
    export default {
        components: {
            LogTable
        },
        data: () => ({
            columns: [{
                title: '时间',
                dataIndex: 'time'
            }, {
                title: '等级',
                dataIndex: 'level'
            }, {
                title: '内容',
                dataIndex: 'content'
            }],
            rows: [{
                time: '2018-08-09',
                level: 'ERROR',
                content: '啦啦啦'
            }, {
                time: '2018-07-09',
                level: 'INFO',
                content: 'eee'
            }]
        })
    }
</script>