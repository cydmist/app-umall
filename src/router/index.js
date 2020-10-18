import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = () => import("../pages/login")
const register = () => import("../pages/register")
const home = () => import("../pages/home")
const index = () => import("../pages/index")
const classfiy = () => import("../pages/classfiy")
const goodcar = () => import("../pages/goodcar")
const main = () => import("../pages/main")
const gooddetail=()=>import("../pages/gooddetail")
const classfiydetail=()=>import("../pages/classfiydetail")

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/login", component: login,
      name: "登录"
    },
    { path: "/register", component: register, name: "注册" },
    {
      path: "/index", component: index,
      children: [
        { path: "home", component: home, name: "首页" },
        { path: "classfiy", component: classfiy, name: "分类" },
        { path: "goodcar", component: goodcar, name: "购物车" },
        { path: "main", component: main, name: "我的" },
        {path:"",redirect:"home"}
      ]
    },
    {path:"/gooddetail",component:gooddetail,name:"商品详情"},
    {path:"/classfiydetail",component:classfiydetail},
    { path: "*", redirect: "/login" }
  ]
})
