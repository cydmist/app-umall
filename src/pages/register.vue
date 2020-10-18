<template>
  <div>
    <box-header></box-header>
    <go-back></go-back>
    <div class="wrap">
      <label for="">手机号：</label>
      <div>
        <input type="text" v-model="user.phone" />
      </div>
      <label for="">昵称：</label>
      <div>
        <input type="text" v-model="user.nickname" />
      </div>
      <label for="">密码：</label>
      <div>
        <input type="text" v-model="user.password" />
      </div>
      <button @click="register()">注册</button>
    </div>
  </div>
</template>

<script>
import { reqRegister } from "../utils/request";
export default {
  data() {
    return {
      user: {
        phone: "",
        nickname: "",
        password: "",
      }
    };
  },
  methods: {
    register() {
      reqRegister(this.user).then((res) => {
         if(res.data.code=200){
            this.$router.push("/login")
         }
      });
    },
  },
  
};
</script>

<style scoped>
.wrap {
  width: 90%;
  margin: 100px auto;
  font-size: 0.4rem;
}
.wrap > div {
  margin-top: 0.2rem;
}

.wrap input{
    width: 90%;
    border: none;
    border-bottom:1px solid black ;
}
button{
    margin-top: 1rem;
    width: 90%;
    background: #f90;
    height: 0.8rem;
    border: none;
}
</style>