import {reqGetCode} from '../api'
const actions = {
    getCode({commit},phone){
     let result   reqGetCode(phone)
    }
}
const mutations = {

}
const state = {

}
const getters = {

}
export default {
    actions,
    mutations,
    state,
    getters
}