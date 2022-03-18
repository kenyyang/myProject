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


export default new Vuex.Store({

    modules: {
        home,
        search

    }
})