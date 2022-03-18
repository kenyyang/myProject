import {reqCategoryList, reqGetbannnerList} from '../../api'
 
const actions = {
    async categoryList ({commit}){
        let result = await reqCategoryList()
        if(result.code ==200){
            commit('CATEGORYLIST',result.data)
        }
        // console.log(result);
        
    },
    async reqGetbannnerList({commit}){
        let result = await reqGetbannnerList()
        console.log(result);
        
    }
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.slice(0,16)
    },
}
const state = {
    categoryList:[],
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