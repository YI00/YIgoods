// 入口文件
// console.log('ok')

import Vue from 'vue'

// 导入根组件
import app from './App.vue'
// 1.导入路由的包
import VueRouter from 'vue-router'
// 2.安装路由
Vue.use(VueRouter)
// 3.导入自己的 router.js 路由模块
import router from './router'

// 导入格式化时间的插件
import moment from 'moment'

// 定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD hh:mm:ss"){
  return moment(dataStr).format(pattern)
})

//2.1导入vue-resource的包
// import VueResource from "vue-resource"
// //2.2安装vue-resource
// Vue.use(VueResource)
// //设置请求的根路径
// Vue.http.options.root='http://www.liulongbin.top:3005'
// //全局设置post时候表单数据格式组织形式 application/x-www-form-urlencoded
// Vue.http.options.emulateJSON=true

import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://www.liulongbin.top:3005/";
import QS from 'qs'
Vue.prototype.qs = QS;

// 导入 MUI 样式
import './lib/mui/css/mui.min.css'
// 导入 MUI 的字体样式
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-ui 中的组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)




var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  router//4.挂载路由对象到 VM 实例上
})