import { reqGetCode } from '../api'
const actions = {
    async getCode({ commit }, phone) {
        //获取验证码的接口，把验证码返回了
        let result = await reqGetCode(phone)
        if(result.code==200){
            commit('reqGetCode',result.data)
            return 'ok'
        }else{
            return Promise.reject(new )
        }
        
    }
}
const mutations = {

}
const state = {

}
const getters = {

}
export default {
    actions,
    mutations,
    state,
    getters
}