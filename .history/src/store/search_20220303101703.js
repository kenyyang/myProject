import { reqGetSearchInfo } from "../api"

const state = {}
const mutations = {}
const actions = {
    //获取search模块的数据
    async getSearchList ({commit},params){
        await reqGetSearchInfo([a])
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}