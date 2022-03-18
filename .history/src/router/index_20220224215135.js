import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'

export default new VueRouter({
    routers:[
        { path: '/home', component: Home },
        { path: '/ogin', component: Login },
        { path: '/Register', component: Register },
        { path: '/Search', component: Search },

    ]   
})