import axios from 'axios'

import nprogress  from 'nprogress'

const requests  = axios.create({
    baseURL:'/api',
    timeout:5000
})
requests.interceptors.request.use((config) => {
      nprogress.start()
      return config
})
requests.interceptors.request.use((res) => {
    nprogress.done()
    return res.data
}),(error) => {
    return Promise.reject(new Error('flase'))
}
export default requests