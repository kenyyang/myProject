import axios from 'axios'

const requsts  = axios.create({
    baseURL:'/api',
    timeout:5000
})
requsts.interceptors.request.use((config) => {
    return config
})
requsts.interceptors.request.use((res) => {
    return res.data
}).(error) => {
    return promise.reject(new Error('flase'))
}
export default requsts