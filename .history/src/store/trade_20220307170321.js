import {reqAddressInfo} from '../api'
const actions = {
    //获取用户地址信息
   as getUserAddress({commit}){
        let result = reqAddressInfo()
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