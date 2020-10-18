// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入el-ment
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入全局过滤器
import  "./filters"
//引入css重置和rem
import "./assets/css/reset.css"
import "./assets/js/rem"
Vue.config.productionTip = false
//注册全局组件
import  "./common"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
