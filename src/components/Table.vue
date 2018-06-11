/**
* Created by huangling on 11/06/2018.
*/
<template>
    <div>
        <md-table md-card>
            <h1 class="md-title">{{title}}</h1>
            <md-table-row >
                <md-table-head v-for="header in columns" :key="header.id">
                    {{header.title}}
                </md-table-head>
            </md-table-row>

            <md-table-row v-for="row in dataSource" :key="row.dataIndex || row.id">
                <md-table-cell v-for="col in columns" :key="col.dataIndex ? row[col.dataIndex] : row.id">
                    {{col.render ? col.render(row[col.dataIndex], row) : row[col.dataIndex]}}
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    export default {
        name: 'TableBasic',
        props: {
            title: {
              type: Function
            },
            columns: {
                type: Array,
                required: true
            },
            dataSource: {
                type: Array,
                required: true
            }
        },
    }
</script>