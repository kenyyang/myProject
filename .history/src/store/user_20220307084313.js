import { reqGetCode, reqUserRegister, reqUserLogin } from '../api'
const actions = {
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
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user)

        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }

    },
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        console.log(res);
        

    }
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    }
}
const state = {
    code: ''
}
const getters = {

}
export default {
    actions,
    mutations,
    state,
    getters
}