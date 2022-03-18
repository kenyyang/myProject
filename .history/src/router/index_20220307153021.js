import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import store from '../store'

let router = new VueRouter({
    routes: [
        {
            name: 'home',
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
            name: 'addcartsuccess',
            path: '/addcartsuccess',
            component: AddCartSuccess,
            meta: { show: true }
        },
        {
            name: 'shopcart',
            path: '/shopcart',
            component: ShopCart,
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
    },

})
router.beforeEach(async (to, from, next) => {
    let name = store.state.user.userInfo.name
    if (store.state.user.token) {
        if (to.path == '/login') {
            next('/home')
        }
        else {
            //已登录去的不是login
            //如果有用户名
            if(name) next()
            //没有用户信息
            else{
            await    this.$store.dispatch('getUserInfo')
            }
            
        }
    }else{
        next()
    }
})
export default router