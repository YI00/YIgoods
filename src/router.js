import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsinfo.vue'
import Photos from './components/photos/photos.vue'
import GoodsList from './components/goods/GoodsList.vue'

var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/search',component:SearchContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/home/newsList',component:NewsList},
    {path:'/home/newsinfo/:id',component:NewsInfo},
    {path:'/home/photos',component:Photos},
    {path:'/home/goodslist',component:GoodsList}
  ],
  linkActiveClass:'mui-active'//覆盖默认路由高亮的类，默认的叫link-active-class
})

export default router