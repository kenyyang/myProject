import { reqGetCode, reqUserRegister, reqUserLogin,reqUserInfo } from '../api'
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        //获取验证码的接口，把验证码返回了
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }

    },
    //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user)

        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }

    },
    //用户登陆
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        console.log(result);
        if (result.code == 200) {
            commit('USERLOGIN',result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }


    },
    //获取用户信息
    ay

}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state,token){
        state.token = token
    }
}
const state = {
    code: '',
    token:''
}
const getters = {

}
export default {
    actions,
    mutations,
    state,
    getters
}