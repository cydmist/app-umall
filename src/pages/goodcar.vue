<template>
  <div class="box" v-if="list">
    <box-header></box-header>
    <div data-v-175fab6d="">
      <div data-v-175fab6d="">
        <div data-v-9b82da76="" class="con">
          <!---->
          <div class="con">
            <div class="every" v-for="(item, index) in list" :key="item.id">
              <div class="title">
                <img src="../assets/img/store.png" alt="" class="title-img" />
                <div class="title-txt">杭州保税区仓</div>
              </div>
              <div class="every-con">
                <div :class="innerLeft ? '' : 'inner2'" class="inner">
                  <div class="left">
                    <img
                      @click="changeone(index)"
                      :src="item.checked ? radio_hig : radio_nor"
                      alt=""
                      class="left-img"
                    />
                    <!---->
                  </div>
                  <div class="center">
                    <img
                      :src="'http://localhost:3000/' + item.img"
                      alt=""
                      class="center-img"
                    />
                  </div>
                  <div class="right">
                    <div class="r-left">
                      <div class="name">
                        {{ item.goodsname }}
                      </div>
                      <div class="btns">
                        <div class="btn" @click="goodmod1(item.id, item.num)">
                          -
                        </div>
                        <div class="btn">{{ item.num }}</div>
                        <div class="btn" @click="goodmod2(item.id, item.num)">
                          +
                        </div>
                      </div>
                      <div style="margin-top: 0.1rem">
                        总价：{{ (item.price * item.num) | filtersprice }}
                      </div>
                    </div>
                  </div>
                  <div class="price">
                    <div>￥{{ item.price | filtersprice }}</div>
                  </div>
                  <div @click="gooddel(item.id)" class="delete-btn">删除</div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="quanxuan">
              <img 
                @click="changeall()"
                :src="init ? radio_hig : radio_nor"
                alt=""
                class="quanxuan-img"
              />
              <div class="quanxuan-txt">全选</div>
            </div>
            <div class="edit">
              <img
                @click="light2()"
                :src="init2 ? editor_nor : editor_hig"
                alt=""
                class="edit-img"
              />
              <!---->
              <div class="edit-txt">编辑</div>
            </div>
            <div class="all">
              <div class="all-price">合计:{{allPrice|filtersprice}}</div>
              <div class="all-price tip">(不含运费)</div>
            </div>
            <div class="pay-btn">去结算</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqShoplist } from "../utils/request";
import { reqShopadd } from "../utils/request";
import { reqShopdel } from "../utils/request";
import { reqShopmod } from "../utils/request";
import radio_hig from "../assets/img/radio_hig.png";
import radio_nor from "../assets/img/radio_nor.png";
import store from "../assets/img/store.png";
import editor_hig from "../assets/img/editor_hig.png";
import editor_nor from "../assets/img/editor_nor.png";
export default {
  computed: {
    allPrice() {
      return this.list.reduce(
        (val, item) => (item.checked ? (val += item.price * item.num) : val),
        0
      );
      console.log(val);
    },
  },
  methods: {
    changeall() {
      this.init=!this.init;
      this.list.forEach((item) => {
        item.checked =this.init ;
      });
      
    },
    changeone(index) {
      this.list[index].checked = !this.list[index].checked;
      this.init = this.list.every(item => item.checked)
    },
    light2() {
      this.init2 = !this.init2;
      this.innerLeft = !this.innerLeft;
    },
    //删除
    gooddel(id) {
      reqShopdel(id).then((res) => {
        reqShoplist().then((res) => {
          res.data.list.forEach((item) => {
            item.checked = false;
          });
          this.list = res.data.list;
        });
      });
    },
    //减
    goodmod1(id, num) {
      console.log(num);
      var type = 1;
      if (num <= 1) {
        num = 1;

        return
      }
      reqShopmod(id, type).then((res) => {
        reqShoplist().then((res) => {
          this.list = res.data.list;
        });
      });
    },
    //加
    goodmod2(id, num) {
      var type = 2;
      reqShopmod(id, type).then((res) => {
        reqShoplist().then((res) => {
          this.list = res.data.list;
        });
      });
    },
  },
  data() {
    return {
      //全选判断
      checkedall:false,
      //最小值
      minnum: 4,
      innerLeft: true,

      // 编辑变色判断
      init2: true,
      //全选判断
      init: false,
      list: [],
      radio_hig,
      radio_nor,
      store,
      editor_hig,
      editor_nor,
    };
  },
  mounted() {
    //购物车列表
    reqShoplist().then((res) => {
      if(!res.data.list){
        return 
      }
      res.data.list.forEach((item) => {
        item.checked = false;
      });
      this.list = res.data.list;
      console.log(this.list);
    });
  },
};
</script>

<style scoped>
.pay-btn {
  width: 2.32rem;
  float: right;
  height: 1.12rem;
  background: #fa0;
  color: #fff;
  text-align: center;
  line-height: 1.12rem;
  font-size: 0.38rem;
}
.tip {
  color: #999;
  margin-left: 0.08rem;
}
.all-price {
  font-size: 0.24rem;
  color: #666;
}

.all {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.29rem;
}

.edit {
  float: left;
  width: 0.58rem;
  margin-top: 0.18rem;
}
.quanxuan-txt,
.edit-txt {
  float: left;
  font-size: 0.28rem;
  color: #666;
  width: 100%;
  text-align: center;
}
.edit-img,
.quanxuan-img {
  width: 0.42rem;
  height: 0.42rem;
  margin-bottom: 0.1rem;
  margin-left: 0.08rem;
  float: left;
}
.quanxuan {
  float: left;
  width: 0.58rem;
  margin-left: 0.38rem;
  margin-top: 0.18rem;
  margin-right: 0.68rem;
}

.footer {
  width: 100%;
  height: 1.12rem;
  position: fixed;
  left: 0;
  bottom: 1.5rem;
  border-top: 0.02rem solid #ccc;
  overflow: hidden;
  background: #fff;
}
.delete-btn {
  float: right;
  height: 2.4rem;
  width: 0.98rem;
  text-align: center;
  line-height: 2.4rem;
  color: #fff;
  background: #fa0;
}
.price {
  float: left;
  font-size: 0.3rem;
  color: #333;
  line-height: 1.2rem;
}
.btn {
  width: 0.78rem;
  height: 0.47rem;
  float: left;
  font-size: 0.24rem;
  color: #666;
  border: 0.01rem solid #ccc;
  text-align: center;
  line-height: 0.47rem;
}
.btns {
  overflow: hidden;
}
.name {
  font-size: 0.32rem;
  overflow: hidden;
  color: #333;
  margin-bottom: 0.33rem;
}

.r-left {
  float: left;
  width: 2.8rem;
  margin-top: 0.1rem;
  margin-right: 0.13rem;
}

.right {
  float: left;
}
.center-img {
  width: 1.57rem;
  height: 1.57rem;
  margin-top: 0.3rem;
  margin-right: 0.21rem;
}
.center {
  float: left;
}
.left-img {
  width: 0.42rem;
  height: 0.42rem;
  margin-left: 0.38rem;
  margin-top: 0.86rem;
  margin-right: 0.21rem;
}
.left {
  float: left;
}
.inner2 {
  margin-left: -1.48rem;
}
.inner {
  width: 8.7rem;
  height: 2.4rem;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.every-con {
  overflow: hidden;
}
.title-txt {
  float: left;
  font-size: 0.28rem;
  color: #a8a8a8;
  line-height: 1.06rem;
}
.title-img {
  float: left;
  width: 0.36rem;
  height: 0.36rem;
  margin-left: 0.36rem;
  margin-top: 0.35rem;
  margin-right: 0.27rem;
}
.title {
  overflow: hidden;
  height: 1.06rem;
  margin-top: 0.8rem;
}
.con {
  margin-bottom: 2.24rem;
}
* {
  margin: 0;
  padding: 0;
  font-size: 0.2rem;
}
.box {
  background: #fafafa;
  min-height: 100vh;
}
</style>