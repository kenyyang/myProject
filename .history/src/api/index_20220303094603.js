//API统一进行管理
import requests from './request'
import mockRequests from './mockAjax'
export const reqCategoryList = () => requests.get(`/product/getBaseCategoryList`)

// 获取banner轮播图接口

export const reqGetbannerList = () => mockRequests.get('/banner')   
//获取floor数据
export const reqFloorList = ()=> mockRequests.get('/floor')
//获取搜索模块数据 地址：/api/list 请求方式：post
//！！！！需要带参数
export const reqGetSearchInfo = ()=>{}

    

