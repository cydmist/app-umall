<template>
  <div>
    <router-view></router-view>
    <footer>
      <router-link to="/index/home">
        <img
          :src="$route.path == '/index/home' ? tab_home_hig : tab_home_nor" alt=""/>
        <div>首页</div>
      </router-link>

      <router-link to="/index/classfiy">
        <img
          :src="$route.path == '/index/classfiy' ? tab_menu_hig : tab_menu_nor"  alt=""/>
        <div class="box">分类</div>
      </router-link>

      <router-link to="/index/goodcar">
        <img :src="$route.path == '/index/goodcar'?tab_shopping_hig:tab_shopping_nor" alt=""/>
        <div>购物车</div>
      </router-link>

      <router-link to="/index/main">
        <img :src="$route.path == '/index/main' ? tab_me_hig : tab_me_nor"
          alt=""/>
        <div>我的</div>
      </router-link>
    </footer>
  </div>
</template>

<script>
import tab_home_hig from "../assets/img/tab_home_hig.png";
import tab_home_nor from "../assets/img/tab_home_nor.png";

import tab_menu_hig from "../assets/img/tab_menu_hig.png";
import tab_menu_nor from "../assets/img/tab_menu_nor.png";

import tab_shopping_hig from "../assets/img/tab_shopping_hig.png";
import tab_shopping_nor from "../assets/img/tab_shopping_nor.png";

import tab_me_hig from "../assets/img/tab_me_hig.png";
import tab_me_nor from "../assets/img/tab_me_nor.png";
export default {
  data() {
    return {
      
      tab_home_hig,
      tab_home_nor,
      tab_menu_hig,
      tab_menu_nor,
      tab_shopping_hig,
      tab_shopping_nor,
      tab_me_hig,
      tab_me_nor,
    };
  },
}
</script>

<style scoped>
.box{
  margin-top: 2px;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  background: #fff;
  display: flex;
  font-size: .3rem;
}
footer a {
  flex: 1;
  text-align: center;
  flex-direction: column;
}
footer img {
  flex-direction: column;
  width: .5rem;
}

</style>