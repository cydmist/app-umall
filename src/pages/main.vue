<template>
  <div data-v-175fab6d="">
    <div data-v-9b82da76="" data-v-175fab6d="">
      <div  data-v-9b82da76="" class="page con">
        <div  class="header">
          <img  alt="" class="header-left" />
          <div  class="header-center">个人中心</div>
          <div  class="header-right">
            <img  alt="" class="header-right-img" />
            <div  class="header-right-text">9+</div>
          </div>
        </div>
        <div  class="top">
          <img
            
            src="../assets/img/master.jpg"
            alt=""
            class="ava"
          />
        </div>
        <div  class="bottom">
          <div  class="name">小不点儿</div>
          <div  class="collection">
            <img src="../assets/img/keep.png" alt="" class="xin" />
            <div  class="collction-text">我的收藏（5）</div>
          </div>
        </div>
        <div  class="order">
          <div  class="order-top">
            <div  class="order-top-left">我的订单</div>
            <div  class="order-top-right">查看订单</div>
          </div>
          <div  class="order-bottom">
            <div  class="status">
              <div  class="img-parent">
                <img src="../assets/img/icon_refund.png" alt="" class="status-img" />
              </div>
              <div  class="status-info">待发货</div>
            </div>
            <div  class="status">
              <div  class="img-parent">
               <img src="../assets/img/icon_refund.png" alt="" class="status-img" />
                <div  class="status-text">3</div>
              </div>
              <div  class="status-info">待发货</div>
            </div>
            <div  class="status">
              <div  class="img-parent">
                <img src="../assets/img/icon_refund.png" alt="" class="status-img" />
                <div  class="status-text">3</div>
              </div>
              <div  class="status-info">待发货</div>
            </div>
            <div  class="status">
              <div  class="img-parent">
                <img src="../assets/img/icon_refund.png" alt="" class="status-img" />
                <div  class="status-text">3</div>
              </div>
              <div  class="status-info">待发货</div>
            </div>
            <div  class="status">
              <div  class="img-parent">
                <img src="../assets/img/icon_refund.png" alt="" class="status-img" />
                <div  class="status-text">3</div>
              </div>
              <div  class="status-info">待发货</div>
            </div>
          </div>
        </div>
        <div  class="address">收货地址管理</div>
      </div>
      
    </div>
  </div>
</template>

<script>
// import master from "../assets/img/master.jpg"
export default {
  // data(){
  //   return {
  //     master,
  //   }
  // }
};
</script>

<style scoped>
.status-text{
    font-size: .18rem;
    width: .38rem;
    height: .38rem;
    background: red;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    right: -.19rem;
    top: -.19rem;
    text-align: center;
    line-height: .38rem;
}
.address{
    background: #fff;
    font-size: .34rem;
    height: 1.3rem;
    line-height: 1.3rem;
    padding-left: .43rem;
    margin-top: .14rem;
    color: #666;
}
.status-info{
    margin-top: .23rem;
    font-size: .24rem;
    color: #666;
    text-align: center;
}
.status-img{
    width: .54rem;
    height: .48rem;
    position: absolute;
    left: 0;
    top: 0;
}
.img-parent{
    width: .54rem;
    height: .48rem;
    margin: .46rem auto 0;
    position: relative;
}
.status{
    width: 20%;
    float: left;
    height: 1.88rem;
}
.order-bottom{
    height: 1.88rem;
    background: #fff;
    overflow: hidden;
}

.order-top-right{
    float: right;
    color: #b6b6b6;
    line-height: 1.24rem;
    font-size: .34rem;
}
.order-top-left{
    float: left;
    font-size: .34rem;
    line-height: 1.24rem;
    color: #333;
    margin-left: 45px;
}


.order-top{
    height: 1.24rem;
    background: #fff;
    overflow: hidden;
    border-bottom: 1px solid #333;
}
.order{
    margin-top: .14rem;
}
.collction-text{
    font-size: .34rem;
    line-height: .38rem;
    float: left;
}

.xin{
    width: .38rem;
    height: .38rem;
    margin-left: .33rem;
    float: left;
    margin-right: .25rem;
}

.collection{
    margin-top: .5rem;
    overflow: hidden;
}
.name{
    padding-top: .96rem;
    text-align: center;
    font-size: .32rem;
    color: #333;
}
.bottom{
    height: 2.62rem;
    background-color: #fff;
}
.ava{
    width: 1.8rem;
    height: 1.8rem;
    border: .14rem solid #fff;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -.9rem;
    bottom: -.9rem;
}
.top{
    height: 2.4rem;
    background: #f90;
    position: relative;
}
.header-right-text{
    position: absolute;
    width: .34rem;
    height: .34rem;
    font-size: .18rem;
    color: #fff;
    background: red;
    text-align: center;
    line-height: .34rem;
    border-radius: 50%;
    right: -.17rem;
    top: -.17rem;
}
.header-right-img{
    width: .5rem;
    height: .5rem;
    float: left;
}
.header-right {
    float: right;
    width: .5rem;
    height: .5rem;
    margin-right: .48rem;
    margin-top: .15rem;
    position: relative;
}
.header-center{
    width: 100%;
    height: .8rem;
    text-align: center;
    line-height: .8rem;
    color: #fff;
    font-size: .42rem;
    position: absolute;
    left: 0;
    right: 0;
}
.header-left{
    float: left;
    width: .5rem;
    height: .5rem;
    margin-left: .3rem;
    margin-top: .15rem;
}
.header{
    height: .8rem;
    background: #f90;
    overflow: hidden;
    position: relative;
}
.con{
    margin-bottom: 1.04rem;
}

*{
    margin: 0;
    padding: 0;
    font-size: .2rem;
}

</style>