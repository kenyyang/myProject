export const setToken =(token) => {
    localStorage.setItem('TOKEN',token)
}
//获取tojen
export const getToken = (token)=>{
    return localStorage.getItem('TOKEN')
}
