//存储tok
export const setToken =(token) => {
    localStorage.setItem('TOKEN',token)
}
//获取token
export const getToken = (token)=>{
    return localStorage.getItem('TOKEN')
}
