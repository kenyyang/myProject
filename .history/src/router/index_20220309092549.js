import VueRouter from 'vue-router'

// import Home from '../pages/Home'
// import Login from '../pages/Login'
// import Register from '../pages/Register'
// import Search from '../pages/Search'
// import Detail from '../pages/Detail'
// import AddCartSuccess from '../pages/AddCartSuccess'
// import ShopCart from '../pages/ShopCart'
// import Trade from '../pages/Trade'
// import Pay from '../pages/Pay'
// import PaySuccess from '../pages/PaySuccess'
// import Center from '../pages/Center'
// import myOrder from '../pages/Center/myOrder'
// import groupOrder from '../pages/Center/groupOrder'
import store from '../store'

let router = new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/home',
            component: ()=>import('../pages/Home'),
            meta: { show: true }
        },
        {
            path: '/login',
            component: ()=>import('../pages/Login'),
            meta: { show: false }
        },
        {
            path: '/register',
            component: ()=>import('../pages/Register'),
            meta: { show: false }
        },
        {
            name: 'search',
            path: '/search/:keyword?',
            component: ()=>import('../pages/Search'),
            meta: { show: true }
        },
        {
            name: 'center',
            path: '/center',
            component:()=>import('../pages/Center'),
            children: [{
                path: 'myorder',
                component: ()=>import('../pages/Center/myOrder')
            },
            {
                path: 'grouporder',
                component: ()=>import('../pages/Center/groupOrder')
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
            ],
            meta: { show: true }
        },
        {
            name: 'trade',
            path: '/trade',
            component: ()=>import('../pages/Trade'),
            meta: { show: true },
            //路由独享守卫
            beforeEnter: (to, from, next) => {
                if(from.path=='/shopcart'){
                    next()
                }else{
                    next(false)
                }
            }
        },
        {
            name: 'paysuccess',
            path: '/paysuccess',
            component: ()=>import('../pages/PaySuccess'),
            meta: { show: true }
        },
        {
            name: 'addcartsuccess',
            path: '/addcartsuccess',
            component: ()=>import('../pages/AddCartSuccess'),
            meta: { show: true }
        },
        {
            name: 'shopcart',
            path: '/shopcart',
            component: ()=>import('../pages/Search'),
            meta: { show: true }
        },
        {
            name: 'pay',
            path: '/pay',
            component: Pay,
            meta: { show: true },
            beforeEnter: (to, from, next) => {
             if(from.path=='/trade'){
                 next()
             }else{
                 next(false)
             }
         }
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
            if (name) next()
            //没有用户信息，派发action让仓库存储用户信息在跳转
            else {
                //
                try {//获取用户信息成功
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    //token失效了
                    //清除token
                    store.dispatch('userLogout')
                }
            }

        }
    } else {
        //未登录：不能去交易相关 不能去支付相关  不能去个人中心 
        //未登录去上面这些路由---登陆
        let toPath = to.path
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 ||
            toPath.indexOf('/paysuccess') != -1 ||
            toPath.indexOf('/center') != -1

         ) {
             
            next('/login')
        } else {
            //去的不是上面这些路由--放行
            next()

        }

    }
})
export default router