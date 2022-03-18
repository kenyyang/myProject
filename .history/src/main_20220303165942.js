import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router' 
import App from './App.vue'
import typeNav from './components/typeNav'
import Carousel from './components/Carousel'
import store from './store'
import './mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'

Vue.component('typeNav',typeNav)
Vue.component('Carousel',Carousel)

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  beforeCreate:{
    vue
  },
  router:router,
  store
}).$mount('#app')