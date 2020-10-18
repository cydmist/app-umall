<template>
  <div>
    <box-header></box-header>
    <div class="con" v-if="list.length > 0">
      <div class="main">
        <div class="left">
          <div
            class="nav"
            :class="index == n ? 'select' : ''"
            v-for="(item, index) in list"
            :key="item.id"
            @click="n = index"
          >
            {{ item.catename }}
          </div>
        </div>
        <div class="right">
          <div
            @click="toDetail(item.id)"
            class="every"
            v-for="item in list[n].children"
            :key="item.id"
          >
            <img :src="'http://localhost:3000/' + item.img" alt="" />
            <div class="text">{{ item.catename }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqGetCateTree } from "../utils/request";

export default {
  methods: {
    toDetail(fid) {
      this.$router.push("/classfiydetail?fid=" + fid);
    },
  },
  data() {
    return {
      n: 0,
      list: [],
      children: [],
    };
  },
  mounted() {
    reqGetCateTree().then((res) => {
      this.list = res.data.list;
    });
  },
};
</script>

<style scoped>
.text {
  height: 0.48rem;
  width: 2.2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #1d84a7;
  color: #fff;
  text-align: center;
  line-height: 0.48rem;
  font-size: 0.23rem;
}
.every img {
  width: 2.2rem;
  height: 2.3rem;
}
.every {
  float: left;
  border: 0.02rem solid #1d84a7;
  border-radius: 0.2rem;
  margin-left: 0.1rem;
  margin-top: 0.24rem;
  position: relative;
  overflow: hidden;
}
.select {
  border-left: 0.1rem solid #1d84a7;
  background: #fff;
  color: #f90;
}
.nav {
  font-size: 0.28rem;
  height: 0.93rem;
  text-align: center;
  line-height: 0.93rem;
  border-left: 0.1rem solid #fafafa;
}
.right {
  flex: 1;
  overflow: hidden;
}
.left {
  width: 2.34rem;
  background: #fafafa;
}
.con {
  margin-bottom: 1.04rem;
}
.main {
  display: flex;
  margin-top: 0.8rem;
}
</style>