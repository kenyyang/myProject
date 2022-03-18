import { reqCartList } from '../api'
const actions = {
    //获取购物车列表的数组
    async getCartlist({ commit }) {
        let result = await reqCartList()
        if(result.coe ==200){
            comm
        }
        
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