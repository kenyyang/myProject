import VueRouter from 'vue-router'


import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'

export default new VueRouter({
    routers:[
        { path: '/home', component: Home },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/search', component: Search },

    ]   
})