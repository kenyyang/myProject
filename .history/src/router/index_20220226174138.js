import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            mate:{show:true}
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/search',
            component: Search,
            mate:{show:true}
        },
        //重定向，在项目跑起来的时候自动跳转到home
        {
            path: '*',
            redirect: './home'
        }

    ]
})