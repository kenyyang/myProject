import {reqGetGoodsInfo} from '../api'

const actions = {
    //获取产品信息的action
  async  getGoodInfo({commit},skuId){
     let result =  await reqGetGoodsInfo(skuId)
     if(result.code == 200){
         commit
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