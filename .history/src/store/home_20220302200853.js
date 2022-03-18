import {reqCategoryList,reqGetbannerList,reqFloorList} from '../api'
 

const actions = {
    async categoryList ({commit}){
        let result = await reqCategoryList()
        if(result.code ==200){
            commit('CATEGORYLIST',result.data)
        };
        
    },
    async getBannerList({commit}){
        let result = await reqGetbannerList()
        console.log(result);
        if(result.code ==200){
            commit('GETBANNERLIST',result.data)
        };
        
    },
    async floorList({commit}){
        let result = await reqFloorList
    }
  
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.slice(0,16)
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
}
const state = {
    categoryList:[],
    bannerList:[]
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