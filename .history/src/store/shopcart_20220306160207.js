import { reqCartList, reqDeleteCartById ,reqUpdateCheckedById} from '../api'
const actions = {
    //获取购物车列表的数组
    async getCartlist({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {

            commit('GETCARTLIST', result.data)
        }

    },
    async deleteCartByskuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    deleteAllCheckedCart({ dispatch, getters }) {
        //获取购物车全部的产品
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach((item) => {
          let promise =
            item.isChecked == 1 ? dispatch("deleteCartByskuId", item.skuId) : "";
          promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
      },
      updateAllCartIsChecked({dispatch,state},isChecked){
          let promiseAll = []
          state.cartList.cartInfoList.forEach(item=>{
                dispatch('updateCheckedById',{skuId:item.skuId,isChecked})
          })
          pro
      }
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const state = {
    cartList: []
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
    //计算出来购物车数据
    // cartInfoList(state){
    //     return state.cartList
    // }
}
export default {
    actions,
    mutations,
    state,
    getters
}