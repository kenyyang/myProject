import axios from 'axios'

const requsts  = axios.create({
    baseURL:'/api',
    timeout:5000
})
requsts.interceptors.
export default requsts