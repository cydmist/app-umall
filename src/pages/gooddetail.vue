<template>
  <div class="box">
    <div class="detail">
      <box-header></box-header>
      <go-back></go-back>
      <!-- 商品详情大图 -->
      <img :src="'http://localhost:3000/' + list.img" class="bigimg" alt="" />
      <!-- 商品名称，价钱，属性 -->
      <div class="info">
        <div class="line1">
          <div class="name">{{ list.goodsname }}</div>
          <div class="line1-right">
            <div class="icon-gouwuchezhengpin"></div>
            <div class="collect"></div>
          </div>
        </div>

        <div class="line2">
          <div class="left">
            <div class="new-price">￥&nbsp;&nbsp;{{ list.price }}</div>
            <div class="old-price">￥&nbsp;&nbsp;{{ list.market_price }}</div>
          </div>

          <div class="right">
            <div class="right-line2">
              <div class="btn2" v-if="list.ishot == 1">热卖</div>
              <div class="btn2" v-if="list.isnew == 1">新品</div>
            </div>
          </div>
        </div>
      </div>
      <!-- describute -->
      <div class="des">
        <p v-html="list.description"></p>
      </div>
      <div class="foot">
        <div class="btn" @click="tobuy()">加入购物车</div>
      </div>
      <div class="mask" v-if="n" @click.self="n=0" >
        <div class="picker">
          <div class="info">
            <img :src="'http://localhost:3000/'+list.img" alt="">
            <span>{{list.goodsname}}</span>
          </div>
          <div class="sku">
            <h3>{{list.specsname}}</h3>
            <div class="attr">
              <span :class="index == x ? 'select' : ''" v-for=" (item,index) in JSON.parse(list.specsattr) " :key="item.id" @click="x=index">{{item}}</span>
            </div>
          </div>
          <div class="btn"  @click="Togoodcar()">加入购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqGetgooddetail } from "../utils/request";
import {reqShopadd} from "../utils/request"
export default {
  methods: {
    Togoodcar(){
        //购物车添加请求
        this.n=0;
    var id = this.$route.query.id;
    var uid=localStorage.getItem('uid')
    
    var goodsid=id
    var num=1
    
    reqShopadd(uid,goodsid,num).then(res=>{   
    })
       
    },
    tobuy(){
        this.n+=1;
        
    }
  },
  data() {
    return {
      //颜色属性的判断标准
      x:0,
      //点击详情按钮判断标准
      n:0,
      //商品详情存放数组
      list: [],
      // 商品添加数组
      list2:[]
    };
  },
  mounted() {
    //
    var id = this.$route.query.id;
    reqGetgooddetail(id).then((res) => {
      this.list = res.data.list[0];
      console.log(res.data.list);
    });
    
  },
};
</script>

<style scoped>
.picker .btn{
    position: static;
    display: block;
    margin: 0 auto;
}
.attr .select{
    color: #f90;
    border-color: #f90;
}
.attr span{
    float: left;
    padding: .2rem .3rem;
    border: .02rem solid #666;
    border-radius: .1rem;
    margin: .2rem;
    font-size: .3rem;
}
.attr{
    overflow: hidden;
}
.sku h3{
    font-size: .38rem;
    line-height: .6rem;
    color: #333;
    margin-top: .3rem;
}
.picker .info span{
    float: left;
    line-height: .8rem;
    font-size: .4rem;
}
.picker .info img{
    width: 2rem;
    height: 2rem;
    float: left;
    border-radius: .2rem;
    margin-right: .3rem;
}
.picker .info{
    overflow: hidden;
}
.btn {
  width: 2rem;
  height: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
}
.picker{
    width: 100%;
    padding: .3rem;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
}
.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
}
.foot {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 0.02rem solid #ccc;
  background: #fff;
}
.box {
  min-height: 100vh;
}
.detail {
  background: #ccc;
}
.bigimg {
  width: 100%;
  height: 4rem;
  /* margin-top: 0.8rem; */
}
.info {
  border-top: 2px solid #eee;
  background: #fff;
  margin-bottom: 0.3rem;
}
.line1 {
  width: 6.5rem;
  display: flex;
  margin: 0.1rem auto 0;
}
.name {
  width: 5.5rem;
  padding-right: 0.3rem;
  border-right: 0.01rem solid #eee;
  height: 0.8rem;
  line-height: 0.8rem;
  overflow: hidden;
  font-size: 0.4rem;
  color: #333;
}

.line1-right {
  flex: 1;
}

.icon-gouwuchezhengpin {
  font-size: 0.26rem;
  color: red;
  text-align: center;
  line-height: 0.4rem;
}
.collect {
  font-size: 0.2rem;
  color: red;
  text-align: center;
}

.line2 {
  width: 6.8rem;
  display: flex;
  margin: 0.1rem auto 0;
  padding-bottom: 0.4rem;
}
.left {
  width: 1.5rem;
}
.new-price {
  font-size: 0.3rem;
  color: red;
  margin: 0.1rem;
}

.old-price {
  font-size: 0.3rem;
  color: #666;
  text-decoration: line-through;
}

.right {
  flex: 1;
}
.right-line2 {
  overflow: hidden;
}

.btn2 {
  font-size: 0.3rem;
  color: #fa0;
  border: 0.01rem solid #fa0;
  padding: 0.05rem 0.1rem;
  margin-right: 0.1rem;
  float: left;
}

.des p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>