import { reqGetCode } from '../api'
const actions = {
    async getCode({ commit }, phone) {
        //获取验证码的接口，把验证码返回，
        let result = await reqGetCode(phone)
        console.log(result);
        
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