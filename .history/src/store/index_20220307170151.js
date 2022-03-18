import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
// const actions = {

// }
// const mutations = {

// }
// const state = {

// }
// const getters = {

// }
import home from './home'
import search from './search'
import detail  from "./detail";
import shopcart from "./shopcart";
import user from './user'
import trade from "./trade";

export default new Vuex.Store({

    modules: {
        home,
        search,
        detail,
        shopcart,
        user

    }
})