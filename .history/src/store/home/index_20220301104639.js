import {reqCategoryList} from '../../api'
 

const actions = {
    async categoryList (commit){
        let result = await reqCategoryList()
        if(result.datacode ==200){
            commit('CATEGORYLIST',result.data)
        }
    }
    
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
const state = {
    categoryList:[]
}
const getter = {

}

export default ({
    namespaced:true,
    actions,
    state,
    mutations,
    getter
})