import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router' 
import App from './App.vue'
import typeNav from './components/pages/Home'

Vue.component('typeNav',typeNav)

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
