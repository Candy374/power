/**
* Created by huangling on 09/06/2018.
*/
<template>
    <div>
        <md-table v-model="rows" md-card>
            <md-table-toolbar>
                <h1 class="md-title">Logs</h1>
            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="时间" md-sort-by="time" md-numeric>{{ item.time }}</md-table-cell>
                <md-table-cell md-label="等级" md-sort-by="level">{{ item.level }}</md-table-cell>
                <md-table-cell md-label="内容" md-sort-by="content">{{ item.content }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    export default {
        data: () => ({
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