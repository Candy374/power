About.vue/**
* Created by huangling on 09/06/2018.
*/
<template>
    <div class="container">
        <div class="title">
            <el-input v-model="search" class="input-with-select" style="width: 40%">
                <el-button slot="append" icon="el-icon-search" @click="searchOnTable"></el-button>
            </el-input>
        </div>
        <el-table  :data="searched" v-loading="loading"
                   :default-sort = "{prop: 'name', order: 'descending'}"
        >
            <el-table-column label="客户名"prop="name"></el-table-column>
            <el-table-column label="公司名" prop="company"></el-table-column>
            <el-table-column label="地址" prop="address"></el-table-column>
            <el-table-column label="联系电话" prop="mobile"></el-table-column>
            <el-table-column label="关联设备" prop="machine"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    import Service from '../actions';

    const toLower = (text = '') => {
        return text.toString().toLowerCase()
    };

    export default {
        data: () => ({
            currentSort: 'name',
            currentSortOrder: 'desc',
            search: '',
            searched: [],
            rows: [],
            loading: true
        }),
        created: function () {
            const vm = this;
            Service.getCustomer().then((data) => {
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
            searchOnTable (text) {
                if (text) {
                    this.searched = this.rows.filter(r => {
                        return toLower(r.name).indexOf(toLower(text)) > -1 ||
                            toLower(r.mobile).indexOf(toLower(text)) > -1 ||
                            toLower(r.company).indexOf(toLower(text)) > -1 ||
                            toLower(r.address).indexOf(toLower(text)) > -1 ||
                            toLower(r.machine).indexOf(toLower(text)) > -1
                    })
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
