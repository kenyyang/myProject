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
import * as API from './api'
import {MessageBox} from 'element-ui'
//表单验证
import VeeValidate from 'vee-validate'
Vue.component('typeNav',typeNav)
Vue.component('Carousel',Carousel)
Vue.component('pagination',pagination)
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router:router,
  store
}).$mount('#app')