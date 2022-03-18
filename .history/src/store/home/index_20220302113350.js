import {reqCategoryList,reqGetbannnerList} from '../../api'
 

const actions = {
    async categoryList ({commit}){
        let result = await reqCategoryList()
        if(result.code ==200){
            commit('CATEGORYLIST',result.data)
        }
        console.log(result);
        
    },
  async  getBannerList({commit}){
      let result =  await reqGetbannnerList()
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
        state.bannerList
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