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
    GETCARTLIST(state,cartList){
    state.cartList = cartList
    }
}
const state = {
    cartList:[]
}
const getters = {
    cartList(state){
        return state.cartList[0]
    }
}
export default {
    actions,
    mutations,
    state,
    getters
}