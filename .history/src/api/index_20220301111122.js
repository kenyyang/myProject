//API统一进行管理
import requests from './request'
export const reqCategoryList = () => requests({url:'http://39.98.123.211/api/product/getBaseCategoryList',methods:'get'})