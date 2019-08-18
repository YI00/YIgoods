<template>
  <div>
    <!-- 刚刚将轮播图代码贴上去的时候，看不到效果
         是因为my-swipe的height为0，所以要在样式中添加height-->
    <mt-swipe :auto="4000">           
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt="" >
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newsList">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu2.png" alt="">
                        <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 

  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return {
      lunbotuList:[]//保存轮播图的数组
    }
  },
  created(){
    this.getLunbotu()
  },
  methods:{
    getLunbotu(){//获取轮播图数据
      this.$axios.get('api/getlunbo').then(res=>{
        // console.log(res.data)
        if(res.data.status === 0){
          this.lunbotuList = res.data.message
          // console.log(this.lunbotuList)
        }else{
          Toast("false")
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.mint-swipe{
  height:200px;
  .mint-swipe-item{
    &:nth-child(1){
      background-color: rebeccapurple;
    }
    &:nth-child(2){
      background-color: red;
    }
    &:nth-child(3){
      background-color: rgb(51, 146, 153);
    }
    img{
      width:100%;
      height:100%;
    }
  }
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:0;
  img{
    width: 60px;
    height: 60px;
  }
  .mui-media-body{
    font-size: 13px;
  }
}
</style>
