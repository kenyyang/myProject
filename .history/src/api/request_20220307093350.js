import axios from 'axios'

import nprogress  from 'nprogress'
//在当前模块下引入store
import store from '../store'
import 'nprogress/nprogress.css'

const requests  = axios.create({
    baseURL:'/api',
    timeout:5000
})
requests.interceptors.request.use(config => {
    if(store.state.detail.uuid_token){
        //请求头添加一个字段，
        config.headers.UserTempId  = store.state.detail.uuid_token
    }
    //需要携带token带给服务器
    if(store.state.user.token){
        config.headers.toke
    }
      nprogress.start()
      
      return config
})
requests.interceptors.response.use((res) => {
    nprogress.done()
    
    return res.data
    
},(error) => {
    return Promise.reject(new Error('flase'))
})
export default requests