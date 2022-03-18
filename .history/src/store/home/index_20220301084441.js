import {reqCatogoryList} from '../../api'
const actions = {
    async categoryList (commit){
        let result = await reqCategoryList()
        if(result.code ==200){
            commit('CATEGORYLIST',result,data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = reqCategoryList
    }
}
const state = {
    categoryList:[]
}
const getter = {

}

export default ({

    actions,
    state,
    mutations,
    getter
})