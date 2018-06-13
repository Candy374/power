/**
* Created by huangling on 10/06/2018.
*/
<template>
    <div class="container">
        <p-table :loading="loading" :dataSource="rows"
                 :columns="columns"
        >

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
        data: () => ({
            rows: [],
            columns: [
                {title: '客户名', dataIndex: 'name'},
                {title: '公司名', dataIndex: 'company'},
                {title: '地址', dataIndex: 'address'},
            ],
            loading: true
        }),
        created: function () {
            const vm = this;
            Service.getCustomer().then((data) => {
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