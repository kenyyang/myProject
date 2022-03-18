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
    retur
}
export default requsts