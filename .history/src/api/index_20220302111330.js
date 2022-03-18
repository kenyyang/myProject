//API统一进行管理
import requests from './request'
import mock from ''
export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',methods:'get'})