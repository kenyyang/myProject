import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
// const actions = {

// }
// const mutations = {

// }
// const state = {

// }
// const getter = {

// }
import home from './home'
import search from './search'
import detail  from "./detail";
im

export default new Vuex.Store({

    modules: {
        home,
        search,
        detail

    }
})