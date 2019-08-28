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

## 发表评论
1. 把文本框做数据双向绑定
2. 为发表评论绑定一个事件
3. 校验评论内容是否为空，如果为空，则Toast显示用户，评论内容不能为空
4. 通过 axios 发送一个请求，把评论内容提交给服务器
5. 当发表评论ok后，重新刷新列表，以查看最新的评论
  + 如果调用 getComments 方法重新刷新评论的话，可能只能得到最后一页的评论，前几页的评论获取不到
  + 换一种思路：当评论成功后，在客户端手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论追加到data中comments的开头，这样，就能完美实现刷新评论列表的需求

## 改造图片分析，按钮为路由的链接并显示对应的组件页面

## 绘制图片列表组件结构并美化样式
1. 制作顶部的滑动条
  + 需要借助 MUI 中的 tab-top-webview-main.html
  + 需要把 slider 区域的 mui-fullscreen 类去掉
  + 滑动条无法正常触发滑动，通过检查官方文档，发现这是js组件，需要被初始化一下：
    - 导入 mui.js
    - 调用官方提供的方式去初始化
    ```
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    ```
  + 我们在初始化 滑动条 的时候导入mui.js，但是控制台报错：
  `Unable to preventDefault inside passive event listener due to target being treated as passive`
    - 可能是严格模式的原因
    - 安装`babel-plugin-transform-remove-strict-mode`
    - 然后在.babelrc改配置

  2. 制作底部的图片列表

## 制作图片列表区域
1. 图片列表需要使用懒加载技术，我们可以使用 mint-ui 提供的现成的组件 lazy-load
2. 根据lazy-load的使用文档，尝试使用
3. 渲染图片列表数据
 

 ## 绘制商品列表页面基本结构并美化
 