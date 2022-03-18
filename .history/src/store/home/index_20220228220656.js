import reqCategoryList from '../../api'
const actions = {
    async CategoryList (commit){
        let result = await reqCategoryList()
        if(result.code =200){
            commit('CATEGORYLIST',res)
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