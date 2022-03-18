import {reqAddressInfo} from '../api'
const actions = {
    //获取用户地址信息
   async getUserAddress({commit}){
        let result = await reqAddressInfo()
        if(result.code ==200){
            commit("GETUSERADDRESS",result.data)
        }
    }   
}
const mutations = {
    GETUSERADDRESS(state,address){
        state.address = address
    }
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