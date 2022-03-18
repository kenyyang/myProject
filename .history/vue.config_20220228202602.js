module.exports ={
    //关闭eslint
    lintOnSave: false,
    //代理跨域
    devServer:{
        Proxy:{
            '/api':{
                target:'v'
            }
        }
    }
}