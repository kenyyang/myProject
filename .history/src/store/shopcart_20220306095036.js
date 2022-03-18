import { reqCartList } from '../api'
const actions = {
    //获取购物车列表的数组
    async getCartlist({ commit }) {
        let result = await reqCartList()
        if(result.coe ==200){
            commit('GETCARTLIST',result.data)
        }
        
    }
}
const mutations = {
    GETCARTLIST(state)
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