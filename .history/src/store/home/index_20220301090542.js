import {reqCategoryList} from '../../api'
const actions = {
    // async categoryList (commit){
    //     let result = await reqCategoryList()
    //     if(result.code ==200){
    //         commit('CATEGORYLIST',result.data)
    //     }
    // }
    categoryList(){
        let result = await reqCategoryList()
    }
    

}
const mutations = {
    // CATEGORYLIST(state,categoryList){
    //     state.categoryList = categoryList
    // }
}
const state = {
    // categoryList:[]
}
const getter = {

}

export default ({

    actions,
    state,
    mutations,
    getter
})