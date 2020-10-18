import axios from "axios"


let baseUrl = "/api"
// 请求拦截
axios.interceptors.request.use(config=>{
    if(config.url!=baseUrl+'/login'){
        
        config.headers.authorization=localStorage.getItem("token");
        console.log(config.headers.token);
    }
    return config
})
//响应式拦截
axios.interceptors.response.use(res => {
    console.log('url:' + res.config.url);
    console.log(res)
    return res
})

// 首页
export const reqLogin = (phone, password) => {
    return axios({
        url: baseUrl + "/api/login",
        method: "post",
        data: {
            phone: phone,
            password: password
        }
    })
}
//注册
export const reqRegister = (user) => {
    return axios({
        url: baseUrl + "/api/register",
        method: "post",
        data: {
            phone: user.phone,
            nickname: user.nickname,
            password: user.password
        }
    })
}
//轮播图
export const reqBanner =()=>{
    return axios({
        url:baseUrl+"/api/getbanner",
        method:'get'
    })
}

//秒杀信息
export const reqSeckill=()=>{
    return axios({
        url:baseUrl+"/api/getseckill",
        method:"get"
    })
}
//获取分类树状形结构
export const reqGetCateTree=()=>{
    return axios({
        url:baseUrl+"/api/getcatetree",
        method:"get"
    })
}
//获取商品信息
export const reqGetIndexgoods=()=>{
    return axios({
        url:baseUrl+"/api/getindexgoods",
        method:"get"
    })
}
//获取一个商品信息
export const reqGetgooddetail=(id)=>{
    return axios({
        url:baseUrl+"/api/getgoodsinfo",
        method:"get",
        params:{
            id:id
        }
    })
}

//获取商品分类信息
export const reqGoodclassfiy=(fid)=>{
    return axios({
        url:baseUrl+"/api/getgoods",
        method:"get",
        params:{
            fid:fid
        }
    })
}
//购物车列表
export const reqShoplist=()=>{
    
    return axios({
        url:baseUrl+"/api/cartlist",
        method:"get",
        params:{
            uid:localStorage.getItem('uid')
        }
    })
}
//购物车添加
export const reqShopadd=(uid,goodsid,num)=>{
    return axios({
        url:baseUrl+"/api/cartadd",
        method:"post",
        data:{
            uid:uid,
            goodsid:goodsid,
            num:num
        }
    })
}
//购物车删除
export const reqShopdel=(id)=>{
    return axios({
        url:baseUrl+"/api/cartdelete",
        method:"post",
        data:{
            id:id
        }
    })
}
//购物车修改
export const reqShopmod=(id,type)=>{
    return axios({
        url:baseUrl+"/api/cartedit",
        method:"post",
        data:{
            id:id,
            type:type
        }
    })
}