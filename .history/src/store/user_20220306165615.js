import { reqGetCode } from '../api'
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        console.log('');
        
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