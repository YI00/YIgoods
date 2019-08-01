// 入口文件
// console.log('ok')

import Vue from 'vue'

// 导入 MUI 样式
import './lib/mui/css/mui.min.css'

// 按需导入 Mint-ui 中的组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入根组件
import app from './App.vue'
var vm = new Vue({
  el:'#app',
  render:c=>c(app)
})