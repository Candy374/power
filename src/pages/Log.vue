/**
* Created by huangling on 09/06/2018.
*/
<template>
    <div class="container">
        <md-table v-model="searched" md-card
                  :md-sort.sync="currentSort" :md-sort-order.sync="currentSortOrder" :md-sort-fn="customSort"
        >
            <md-table-toolbar>
                <h1 class="md-title">Logs</h1>
                <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="请输入" v-model="search" @input="searchOnTable" />
                </md-field>
            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }"
                          md-selectable="multiple" md-auto-select
            >
                <md-table-cell md-label="时间" md-sort-by="time" md-numeric>{{ item.time }}</md-table-cell>
                <md-table-cell md-label="等级" md-sort-by="level">{{ item.level }}</md-table-cell>
                <md-table-cell md-label="内容" md-sort-by="content">{{ item.content }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    const toLower = text => {
        return text.toString().toLowerCase()
    };

    export default {
        data: () => ({
            currentSort: 'time',
            currentSortOrder: 'desc',
            search: '',
            rows: [{
                time: '2018-08-09',
                level: 'ERROR',
                content: '啦啦啦'
            }, {
                time: '2018-07-09',
                level: 'INFO',
                content: 'eee'
            }]
        }),
        methods: {
            customSort (value) {
                return value.sort((a, b) => {
                    const sortBy = this.currentSort;

                    if (this.currentSortOrder === 'desc') {
                        return a[sortBy].localeCompare(b[sortBy])
                    }

                    return b[sortBy].localeCompare(a[sortBy])
                })
            },
            searchOnTable (text) {
                if (text) {
                    this.searched = this.rows.filter(r => toLower(r.content).indexOf(toLower(text)) > -1)
                } else {
                    this.searched = this.rows;
                }
            }
        },
        created () {
            this.searched = this.rows
        }
    }
</script>
<style scoped="">
    .container {
        padding: 30px;
    }
</style>