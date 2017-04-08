import Vue from 'vue';
import App from './App.vue';

import './css/main.scss';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);

import Main from './components/main.vue';
import Bourn from './components/router/bourn.vue';
import Country from './components/router/country.vue';
import loginRegister from './components/router/loginRegister.vue';
import Login from './components/router/childrenRouter/login.vue';
import Register from './components/router/register.vue';

import ChildrenA from './components/router/childrenRouter/childrena.vue';
import ChildrenB from './components/router/childrenRouter/childrenb.vue';
import ChildrenC from './components/router/childrenRouter/childrenc.vue';
import ChildrenD from './components/router/childrenRouter/childrend.vue';
import ChildrenE from './components/router/childrenRouter/childrene.vue';
import ChildrenF from './components/router/childrenRouter/childrenf.vue';
import ChildrenG from './components/router/childrenRouter/childreng.vue';

import Grandson1 from './components/router/grandson/grandson1.vue';
import Grandson2 from './components/router/grandson/grandson2.vue';

const router = new VueRouter({
    routes: [{
            path: '/main',
            name: "main",
            component: Main
        },
        {
            path: '/bourn',
            name: "bourn",
            component: Bourn,
            redirect: '/yazhou',
            children: [{
                path: '/yazhou',
                name: 'bourn.childrena',
                component: ChildrenA
            }, {
                path: '/ouzhou',
                name: 'bourn.childrenb',
                component: ChildrenB
            }, {
                path: '/dayangzhou',
                name: 'bourn.childrenc',
                component: ChildrenC
            }, {
                path: '/beumeizhou',
                name: 'bourn.childrend',
                component: ChildrenD
            }, {
                path: '/feizhou',
                name: 'bourn.childrene',
                component: ChildrenE
            }, {
                path: '/nanmeizhou',
                name: 'bourn.childrenf',
                component: ChildrenF
            }, {
                path: '/nanjizhou',
                name: 'bourn.childreng',
                component: ChildrenG
            }]
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }, {
            path: "/loginRegister",
            name: 'loginRegister',
            component: loginRegister,
            redirect: '/login',
            children: [{
                path: '/login',
                name: 'loginRegister.login',
                component: Login,
                redirect: '/grandson1',
                children: [{
                        path: '/grandson1',
                        name: 'login.grandson1',
                        component: Grandson1
                    },
                    {
                        path: '/grandson2',
                        name: 'login.grandson2',
                        component: Grandson2
                    }
                ]
            }]
        },
        {
            path: '/country/:uid',
            name: 'country',
            component: Country
        },
        {
            path: '*',
            redirect: '/main/'
        }
    ]
})


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})