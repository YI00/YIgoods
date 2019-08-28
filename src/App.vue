<template>
  <div class="app-container">
    <!-- header区域 -->
    <mt-header fixed title="Ysz的个人项目"></mt-header>
    <!-- 中间区域 -->

			<router-view></router-view>

    <!-- footer区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-ysz" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-ysz" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-ysz" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-ysz" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.app-container{
	padding-top: 40px;
	padding-bottom: 50px;
}
.mui-bar-tab .mui-tab-item.mui-active{
      color: #007aff
}
.mui-bar-tab .mui-tab-item-ysz{
  display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-ysz .mui-icon .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

.mui-bar-tab .mui-tab-item-ysz .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
</style>

