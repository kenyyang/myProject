//API统一进行管理
import requests from './request'
export const reqCategoryList = () => requests({url:'/api/product/getBaseCategoryList',methods:'get'})
con