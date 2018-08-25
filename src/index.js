/**
 * Created by huangling on 09/06/2018.
 */

import Vue from 'vue';
import VueMaterial from 'vue-material';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import Customer from './pages/CustomerList.vue';
import Settings from './pages/Settings.vue';
import Machine from './pages/Machine.vue';
import MachineList from './pages/machine/MachineList.vue';
import MachineCode from './pages/machine/CodeList.vue';
import MachineType from './pages/machine/TypeList.vue';
import Log from './pages/Log.vue';
import Home from './pages/Home.vue';
import Main from './layouts/Main.vue';
import NotFound from './pages/404.vue';
import Service from './actions';

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [{
    path: '/',
    component: Main,
    children: [
        {path: 'log', component: Log},
        {
            path: 'machine', component: Machine,
            children: [
                {path: 'list', component: MachineList},
                {path: 'code', component: MachineCode},
                {path: 'type', component: MachineType},
                {path: '', redirect: 'list'},
                {path: '*', redirect: 'list'},
            ]
        },
        {path: 'customer', component: Customer},
    ],
}, {
    path: '*',
    component: NotFound,
}];

Service.getUser().then(user => {
    if (user.isAdmin) {
        routes[0].children.push({path: 'userManager', component: Settings});
    }
    routes[0].children.push({path: '*', component: Home});

    const app = new Vue({
        el: '#app',
        router: new VueRouter({routes}),
    });
});