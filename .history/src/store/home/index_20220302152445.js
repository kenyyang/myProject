import {reqCategoryList, reqGetbannerList} from '../../api'
 
const actions = {
    async categoryList ({commit}){
        let result = await reqCategoryList()
        if(result.code ==200){
            commit('CATEGORYLIST',result.data)
        }
        // console.log(result);
        
    },
    async getBannerList({commit}){
        let result = await reqGetbannerList()
        console.log(result);
        if(result.code ==200){
            commit('BANNERLIST',result.data)
        }
    }
} 
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.slice(0,16)
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
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