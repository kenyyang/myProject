import {reqGetGoodsInfo} from '../api'

const actions = {
    //获取产品信息的action
  async  getGoodInfo({commit},skuId){
     let result =  await reqGetGoodsInfo(skuId)
     if(result.code == 200){
         commit('GETGOODINFO',result.data )
     }
    }
}
const mutations = {
    GETGOODINFO
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