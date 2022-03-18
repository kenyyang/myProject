import { reqGetCode } from '../api'
const actions = {
    async getCode({ commit }, phone) {
        //获取验证码的接口，把验证码返回了
        let result = await reqGetCode(phone)
        if(result.code==200){
            commit('GETCODE',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
        
    }
}
const mutations = {
    GETCODE(state)
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