import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { show: true }
        },
        {
            path: '/login',
            component: Login,
            meta: { show: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { show: false }
        },
        {
            name: 'search',
            path: '/search/:keyword?',
            component: Search,
            meta: { show: true }
        },
        {
            name: 'Detail',
            path: '/Detail/:skuId',
            component: Detail,
            meta: { show: true }
        },
        //重定向，在项目跑起来的时候自动跳转到home
        {
            path: '*',
            redirect: './home'
        }

    ],
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})