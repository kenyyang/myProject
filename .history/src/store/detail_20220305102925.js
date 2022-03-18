import { reqGetGoodsInfo } from '../api'

const actions = {
    //获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGetGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    }
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const state = {
    goodInfo: {}
}
const getters = {
    //路径导航简化的h
    categoryView(state){
        return state.goodInfo.categoryView ||{}
    },
    //产品信息
    skuInfo(state){
       return state.goodInfo.skuInfo ||{} 
    },

}
export default {
    actions,
    mutations,
    state,
    getters
}