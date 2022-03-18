import {reqCategoryList} from '../../api'
 

const actions = {
    async categoryList ({commit}){
        let result = await reqCategoryList()
        if(result.data.code ==200){
            commit('CATEGORYLIST',result.data)
        }
        console.log(result );
        
    }
    
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.slice(0,)
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