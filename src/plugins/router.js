import Vue from 'vue';
import Router from 'vue-router';

import AppHome from '@/components/AppHome';
import AppMedium from '@/components/AppMedium';

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
            // component: () => import('./components/AppHome')
        },
        {
            path: '/medium',
            name: 'Medium',
            component: AppMedium
        }
    ]
});
