import { reqGetSearchInfo } from "../api"

const state = {}
const mutations = {}
const actions = {
    //获取search模块的数据
    async getSearchList ({commit},params){
       let result =  await reqGetSearchInfo(params)
       console.log(result);
       if(result.code==200)
       
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}