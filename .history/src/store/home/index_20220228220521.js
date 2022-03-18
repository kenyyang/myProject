import reqCategoryList from '../../api'
const actions = {
    as
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