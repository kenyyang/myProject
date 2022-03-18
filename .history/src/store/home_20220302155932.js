import {reqCategoryList,reqGetbannerList} from '../api'
 

const actions = {
    async categoryList ({commit}){
        let result = await reqCategoryList()
        if(result.code ==200){
            commit('CATEGORYLIST',result.data)
        };
        
    },
    async getannerList(){
        let result = await reqGetbannerList()
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