/**
* Created by huangling on 09/06/2018.
*/
<template>
    <div class="container">
        <div class="title">
            <el-input v-model="search" class="input-with-select" style="width: 40%">
                <el-button slot="append" icon="el-icon-search" @click="searchOnTable"></el-button>
            </el-input>
        </div>
        <el-table :data="searched" style="width: 100%" stripe
                  :default-sort = "{prop: 'time', order: 'descending'}"
                  v-loading="loading"
        >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="time" label="时间" sortable  width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.time }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="level"
                    label="等级"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="content"
                    label="内容" >
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                style="float: right"
                :total="searched.length">
        </el-pagination>
    </div>
</template>

<script>
    import Service from '../actions';

    const toLower = text => {
        return text.toString().toLowerCase()
    };

    export default {
        data: () => ({
            currentSort: 'time',
            currentSortOrder: 'desc',
            search: '',
            searched: [],
            rows: [],
            loading: true,
        }),
        created: function () {
            const vm = this;
            Service.getLog().then((data) => {
                vm.rows = data;
                vm.searched = data;
                vm.loading = false;
            });
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
            searchOnTable () {
                const text = this.search;
                if (text) {
                    this.searched = this.rows.filter(r => toLower(r.content).indexOf(toLower(text)) > -1)
                } else {
                    this.searched = this.rows;
                }
            },
        }
    }
</script>
<style scoped="">
    .container {
        margin: 15px 0;
    }

    .title {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 15px;
    }
</style>