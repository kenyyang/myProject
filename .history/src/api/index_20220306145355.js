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
export const reqGetSearchInfo = (params)=> requests({url:'/list',method:'post',data:params})
//获取产品详情的接口  URL：/api/item/{ skuId } 请求方式：get
export const reqGetGoodsInfo = (skuId) =>requests({url: `/item/${skuId }`,method:'get' })
//将产品添加到购物车中或者更新某一个产品的个数
///api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
//获取购物车列表/api/cart/cartList GET
export const reqCartList  = () => requests({url:'/cart/cartList',method:'get'}) 
//删除购物产品的接口 /api/cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
//切换商品的选中状态 /api/cart/checkCart/{skuID}/{isChecked} GET
export const reqUpdateCheckedBu


    


