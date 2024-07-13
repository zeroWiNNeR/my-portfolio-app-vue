import Vue from 'vue';
import Router from 'vue-router';

import index from '@/pages/index';

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: index
            // component: () => import('./components/AppHome')
        }
    ]
});
