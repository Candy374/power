/**
* Created by huangling on 11/06/2018.
*/
<template>
    <div class="container">
        <md-table v-model="searched" md-card>
            <md-table-toolbar>
                <h1 class="md-title">{{title}}</h1>
                <md-field md-clearable class="md-toolbar-section-end">
                    <md-input placeholder="请输入" v-model="search" @input="searchOnTable"/>
                </md-field>
            </md-table-toolbar>

            <div v-if="loading" class="placeholder">正在查询...</div>
            <div v-else-if="searched.length === 0" class="placeholder">没有数据</div>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell
                        v-for="col in columns" :md-label="col.title" :md-sort-by="col.dataIndex"
                        :key="col.dataIndex"
                >
                    <div v-if="col.slot">
                        <slot :name="col.dataIndex" :slot-value="item[col.dataIndex]" :slot-data="item"></slot>
                    </div>
                    <div v-else>{{item[col.dataIndex]}}</div>
                </md-table-cell>
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
        props: ['loading', 'dataSource', 'columns', 'title'],
        data: function () {
            return {
                search: '',
                searched: [],
            }
        },
        watch:  {
            'loading': function () {
                this.searched = this.dataSource;
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