//API统一进行管理
import requests from './request'
import mockRequests from './mockAjax'
export const reqCategoryList = () => requests.get(`/pro`)

// 获取banner轮播图接口
export const reqGetbannnerList = () => mockRequests.get('banner')