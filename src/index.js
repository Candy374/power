/**
 * Created by huangling on 09/06/2018.
 */

import Vue from 'vue';
import routes from './routes';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
Vue.use(VueMaterial);

const app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname.split('/')[1]
    },
    computed: {
        ViewComponent () {
            const matchingView = routes['/' + this.currentRoute];
            return matchingView
                ? require('./pages/' + matchingView + '.vue')
                : require('./pages/404.vue')
        }
    },
    render (h) {
        return h(this.ViewComponent)
    }
});

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname.split('/')[1]
});