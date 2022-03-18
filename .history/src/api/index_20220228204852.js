//API统一进行管理
import requests from './request'
export const reqCatogoryList = () => re({url:'/product/getBaseCategoryList',methods:'get'})