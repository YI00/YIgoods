<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" :key="item.id">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      pageindex:1,//分页的页数
      goodslist:[]//存放商品的数组
    }
  },
  created(){
    this.getGoodsList();
  },
  methods:{
   async getGoodsList(){
    const res=await this.$axios.get('api/getgoods?pageindex='+this.pageindex)
    if(res.data.status===0){
      this.goodslist=res.data.message
    }
    },
    getMore(){
      this.pageindex++
      this.getGoodsList()
    }
  }
  
}
</script>
<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-item{
    width: 49%;
    border: 1px solid #cccccc;
    box-shadow: 0 0 8px #cccccc;
    margin: 4px 0;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }
    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
        }
        .old{
          text-decoration:line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }

  }
}
</style>