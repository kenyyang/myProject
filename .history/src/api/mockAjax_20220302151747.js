import axios from 'axios'

import nprogress  from 'nprogress'

import 'nprogress/nprogress.css'

const mockRequests  = axios.create({
    baseURL:'/mock',
    timeout:5000
})
mockRequests.interceptors.request.use(config => {
      nprogress.start()
      console.log('');
      
      return config
})
mockRequests.interceptors.response.use((res) => {
    nprogress.done()
    
    return res.data
    
},(error) => {
    return Promise.reject(new Error('flase'))
})
export default mockRequests