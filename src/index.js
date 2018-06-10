/**
 * Created by huangling on 09/06/2018.
 */

import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import VueRouter from 'vue-router';
import Customer from './pages/Customer.vue';
import Machine from './pages/Machine.vue';
import MachineList from './pages/machine/List.vue';
import MachineCode from './pages/machine/Code.vue';
import MachineType from './pages/machine/Type.vue';
import Log from './pages/Log.vue';
import Home from './pages/Home.vue';
import Main from './layouts/Main.vue';
Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
    routes: [
        {
            path: '/', component: Main,
            children: [
                {path: '', component: Home},
                {path: 'log', component: Log},
                {
                    path: 'machine', component: Machine,
                    children: [
                        {path: 'list', component: MachineList},
                        {path: 'code', component: MachineCode},
                        {path: 'type', component: MachineType},
                    ]
                },
                {path: 'customer', component: Customer},
            ]
        }
    ]
});

const app = new Vue({
    el: '#app',
    router,
});