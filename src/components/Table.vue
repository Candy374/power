/**
* Created by huangling on 11/06/2018.
*/
<template>
    <div>
        <md-table v-model="dataSource" md-card>
            <md-table-toolbar>
                <h1 class="md-title">Users</h1>
            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
                <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
                <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
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