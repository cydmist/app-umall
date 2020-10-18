<template>
  <div class="con">
    <router-view></router-view>
    <header>
      <div class="box">
        <img src="../assets/img/img/home/logo.jpg" alt="" />
      </div>
    </header>
    <!-- banner -->
    <template>
      <el-carousel :interval="1000" arrow="always"
        height="5rem"
      >
        <el-carousel-item v-for="(item, index) in list1" :key="index">
          <img :src="'http://localhost:3000/' + item.img" alt="" />
        </el-carousel-item>
      </el-carousel>
    </template>
  
  
    <!-- 显示抢购 -->
    
        <ul class="discount">
          <li v-for='item in list2' :key="item" >
            <img src="../assets/img/img/home/xsqg.jpg" alt="">
            <p>{{item}}</p>
          </li>
        </ul>
    
    <!-- 商品信息 -->
    <div class="goodinfo">
        <ul>
          <li v-for="item in list" :key="item.id" @click="toGooddetail(item.id)">
            <img :src="'http://localhost:3000/'+item.img" alt="">
            <div class="right">
              <h3>{{item.goodsname}}</h3>
            
              <div class="price">￥{{item.price}}</div>
              <button>立即抢购</button>
            </div>
          </li>
        </ul>
    </div>
    
  </div>
</template>

<script>
import logo from "../assets/img/img/home/logo.jpg";
import xsqg from "../assets/img/img/home/xsqg.jpg"
import { reqBanner } from "../utils/request";
import { reqSeckill } from "../utils/request";
//商品信息
import { reqGetIndexgoods } from "../utils/request";
export default {
  data() {
    return {
      //抢购列表
      list2:["限时抢购","积分商城","联系我们","商品分类"],
      list: [],
      //轮播图
      list1: [],
    };
  },
  methods: {
    toGooddetail(id) {
      this.$router.push("/gooddetail?id=" + id);
    },
  },
  mounted() {
    reqGetIndexgoods().then((res) => {
      this.list = res.data.list[0].content;
    });
    //轮播图
    reqBanner().then((res) => {
      this.list1 = res.data.list;
    });
    //秒杀
    reqSeckill().then((res)=>{
      console.log(res);
    })
  },
};
</script>

<style scoped>
.discount{
  margin-top:0.2rem ;
  display: flex;
  
}
.discount p{
  text-align: center;
}
.discount  li{
  width: 74px;
  flex: 1;
}
.discount img{
  width: 74px;
  height: 100px;
}
.el-carousel__item img{
  width: 100%;
  height: 100%;
}
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 2rem;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.con {
  display: flex;
  flex-direction: column;
}
header {
  height: 1.2rem;
}
header .box {
  display: block;
  line-height: 1.2rem;
}
.goodinfo {
  flex: 1;
  margin-top: .2rem;
  flex-direction: column;
}
.goodinfo li {
  width: 90%;
  margin: 0.1rem auto;
  height: 2.4rem;
  overflow: hidden;
  /* margin: 20px auto; */
  padding: 0.2rem;
}
.goodinfo li:last-child {
  margin-bottom: 1.7rem;
}
.goodinfo li img {
  /* display: inline-block; */
  width: 2rem;
  height: 2rem;
  float: left;
  margin-right: 0.3rem;
}
.goodinfo li .right {
  float: left;
}

.goodinfo li h3 {
  font-size: 0.5rem;
}

.goodinfo .price {
  color: #e23838;
  font-size: 0.4rem;
}
button {
  padding: 0.2rem 0.4rem;
  background: #f90;
  color: #fff;
  display: inline-block;
  border-radius: 0.2rem;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  background: #fff;
  display: flex;
}
footer a {
  flex: 1;
  text-align: center;
  flex-direction: column;
}
footer img {
  flex-direction: column;
}
</style>