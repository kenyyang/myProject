import axios from 'axios'

const requsts  = axios.create({
    baseURL:'/api',
    
})
export default requsts