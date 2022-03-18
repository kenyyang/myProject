import { reqGetGoodsInfo ,reqAddOrUpdateShopCart} from '../api'

const actions = {
    //获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGetGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    async addOrUpdateShopCart ({commit},{skuId,skuNum}){
        //加入购物车返回的解构
        //加入购物车以后（发请求），前台将参数带给服务器
        //服务器写入数据成功，并没有返回其他数据，只返回code= 200，代表这次操作成功
        //因为服务器没有返回其余数据，因此不需要三连环cun
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        console.log(result);
        

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
    //路径导航简化的数据
    categoryView(state){
        return state.goodInfo.categoryView ||{}
    },
    //简化产品信息是数据
    skuInfo(state){
       return state.goodInfo.skuInfo ||{} 
    },
    //产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList ||[]
    }

}
export default {
    actions,
    mutations,
    state,
    getters
}