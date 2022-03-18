import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router' 

import App from './App.vue'
import typeNav from './components/typeNav'
import Carousel from './components/Carousel'
import pagination from './components/pagination'

import store from './store'
import './mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'
//统一接口API文件夹里面全部请求函数
import *a

Vue.component('typeNav',typeNav)
Vue.component('Carousel',Carousel)
Vue.component('pagination',pagination)

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router:router,
  store
}).$mount('#app')