import {reqGetGoodsInfo} from '../api'

const actions = {
    //获取产品信息的action
  async  getGoodInfo({commit},sk){
        await reqGetGoodsInfo()
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