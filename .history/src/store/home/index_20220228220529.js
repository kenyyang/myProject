import reqCategoryList from '../../api'
const actions = {
    async c
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