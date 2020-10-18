<template>
  <div>
    <box-header> </box-header>
    <router-link to="/register">注册</router-link>
    <div class="box">
      <label for="">账号：</label>
      <div>
        <input type="text" v-model="user.phone" />
      </div>
      <label for="">密码：</label>
      <div>
        <input type="text" v-model="user.password" />
      </div>
      <button @click="login()">登录</button>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "../utils/request";
export default {
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      reqLogin(this.user.phone, this.user.password).then((res) => {
        if (res.data.code == 200) {
          localStorage.setItem("uid", res.data.list.uid);
          localStorage.setItem("token", JSON.stringify(res.data.list.token));
          console.log(res.data.list.token);
          this.$router.push("/index");
        } else {
          alert(res.data.msg);
        }
      });
    },
  },
};
</script>

<style scoped>
a {
  font-size: 0.6rem;
  position: fixed;
  top: 0;
  right: 0;
  color: #fff;
}
.box {
  width: 80%;
  margin: 2rem auto;
}
.box > div {
  margin-top: 0.3rem;
}
.box label {
  margin-top: 1rem;
}
.box input {
  width: 90%;
  border: none;
  border-bottom: 1px solid black;
}
button {
  margin-top: 1rem;
  width: 90%;
  background: #f90;
  height: 0.8rem;
  border: none;
}
</style>