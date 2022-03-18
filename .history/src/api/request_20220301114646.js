import axios from 'axios'

import nprogress  from 'nprogress'

import 'nprogress/nprogress.css'

const requests  = axios.create({
    baseURL:'/api',
    timeout:5000
})
requests.interceptors.request.use((config) => {
      nprogress.start()
      return config
},err=>{
    return Promise.reject(error==)
})
requests.interceptors.request.use((res) => {
    nprogress.done()
    
    return res.data
    
},(error) => {
    return Promise.reject(new Error('flase'))
})
export default requests