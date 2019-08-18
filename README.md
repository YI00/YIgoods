## 制作首页 App 组件
1. 完成 Header 区域，使用的是 Mint-ui 中的 Header 组件
2. 制作底部的 Tabber 区域，使用的是 MUI 的 Tabber.html
   + 在制作 购物车 小图标的时候，操作会多一些
   + 先把 扩展图标的 css 样式拷贝到项目中
   + 为购物车小图标，添加如下样式 `mui-icon-extra mui-icon-extra-cart`

3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为router-link

## 设置路由高亮
  + 这里考虑了，点击图标高亮的问题，在router.js去修改路由默认高亮的类，用 mui-active 去覆盖`linkActiveClass:'mui-active'`

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据，使用 axios，教程使用的是vue-resource，因为现在更加推荐的是axios，所以我自己选用axios
  + 1. `cnpm i axios -D`
  + 2. main.js中导入`import axios from 'axios'`

## 改造新闻资讯路由链接

## 新闻资讯 页面制作
1. 绘制界面,使用 MUI 中的 media-list.html
2. 使用 axios 获取数据
3. 渲染真实数据

## 实现新闻资讯列表 点击调转到新闻详情
1. 把列表中的每一项改造为 router-link ，同时，在跳转的时候应该提供唯一的id标识符
2. 创建新闻详情的组件页面 NewInfo.vue
3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现 新闻详情 的页面布局和数据渲染

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的页面中，先手动导入 comment 组件
    + `import comment from './comment.vue'`
3. 在父组件中，使用`components`属性，将刚才导入的comment组件，注册为自己的子组件
4. 将注册子组件的注册名称，以标签形式，在页面中引用即可 


## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让 pageIndex++，然后重新调用 this.getComments() 方法重新获取最新一页的数据