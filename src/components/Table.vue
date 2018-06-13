/**
* Created by huangling on 11/06/2018.
*/
<template>
    <div class="container">
        <md-table v-model="searched" md-card
                  :md-sort.sync="currentSort" :md-sort-order.sync="currentSortOrder" :md-sort-fn="customSort"
        >
            <md-table-toolbar>
                <h1 class="md-title">Customer</h1>
                <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="请输入" v-model="search" @input="searchOnTable"/>
                </md-field>
            </md-table-toolbar>

            <div v-if="loading" class="placeholder">正在查询...</div>
            <div v-else-if="searched.length === 0" class="placeholder">没有数据</div>

            <md-table-row
                    slot="md-table-row" slot-scope="{ item }"
                    md-selectable="multiple" md-auto-select
            >
                <md-table-cell md-label="客户名" md-sort-by="name" md-numeric>{{ item.name }}</md-table-cell>
                <md-table-cell md-label="公司名" md-sort-by="company">{{ item.company }}</md-table-cell>
                <md-table-cell md-label="地址" md-sort-by="address">{{ item.address }}</md-table-cell>
                <md-table-cell md-label="联系电话" md-sort-by="mobile">{{ item.mobile }}</md-table-cell>
                <md-table-cell md-label="关联设备" md-sort-by="machine">{{ item.machine }}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    import Service from '../actions';

    const toLower = (text = '') => {
        return text.toString().toLowerCase()
    };

    export default {
        props: ['loading', 'dataSource', 'defaultSort', 'columns'],
        data: function () {
            return {
                currentSort: '',
                currentSortOrder: 'desc',
                search: '',
                searched: [],
            }
        },
        watch:  {
            'loading': function () {
                this.searched = this.dataSource;
                this.currentSort = this.defaultSort;
            }
        },
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
                    const vm = this;
                    this.searched = this.dataSource.filter(row => {
                        return vm.columns.find(col => {
                            const value = row[col.dataIndex];
                            return toLower(value).indexOf(toLower(text)) > -1
                        });
                    })
                } else {
                    this.searched = this.dataSource;
                }
            },
        }
    }
</script>
<style scoped>
    .container {
        width: 100%;
    }

    .placeholder {
        padding: 20px;
        text-align: center;
    }
</style>