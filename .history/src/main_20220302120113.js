import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router' 
import App from './App.vue'
import typeNav from './components/typeNav'
import store from './store'
import './mock/mockServe'
import 'swiper/css/'

Vue.component('typeNav',typeNav)

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')