//API统一进行管理
import requests from './request'
export const reqCatogoryList = () => ({url:'/product/getBaseCategoryList',methods:'get'})