import {reqCategoryList,reqGetbannerList} from '../api'
 

const actions = {
    async categoryList ({commit}){
        let result = await reqCategoryList()
        if(result.code ==200){
            commit('CATEGORYLIST',result.data)
        };
        
    },
    async getBannerList(){
        let result = await reqGetbannerList()
        console.log(result);
        if(result.code ==200){
            commit('GETBANNERLIST',result.data)
        };
        
    }
  
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,getBannerList){
        state.categoryList = categoryList
    }
}
const state = {
    categoryList:[],
    getBannerList:[]
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