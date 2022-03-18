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
export const reqUpdateCheckedById = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
//获取验证码 /api/user/passport/sendCode/{phone} GET
export const reqGetCode = (phone) => requests({url:`/user/passport/sendCode/${phone}`,method:"get"})
//注册的接口 /api/user/passport/register post  phone code password
export const reqUserRegister = (data)=> requests({url:'/user/passport/register',data,method:'post'})
//登陆  /api/user/passport/login post   phone password
export const reqUserLogin = (data)=>requests({url:`/user/passport/login`,data,method:'post'})
//获取用户信息【需要带着用户的token向服务器要用户信息】/user/passport/auth/getUserInfo
export const reqUserInfo = ()=> requests({url:'/user/passport/auth/getUserInfo',method:'get'})
//退出登陆 /api/user/passport/logout  get
export const reqLogout = () => requests({url:'/user/passport/logout',method:'get'})
//   获取用户地址接口    /api/user/userAddress/auth/findUserAddressList 
export const reqAddressInfo




    


