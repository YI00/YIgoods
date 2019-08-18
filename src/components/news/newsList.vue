<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：{{item.add_time | dateFormat}}</span>
                <span>点击：{{item.click}}次</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>
<script>
import Toast from 'mint-ui'
export default {
  data(){
    return {
      newsList:[]
    }
  },
  created(){
    this.getNewsList()
  },
  methods:{
    async getNewsList(){
      const res = await this.$axios.get('/api/getnewslist')
      if(res.data.status == 0){
        this.newsList = res.data.message
      }else{
        Toast('数据获取失败')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.mui-media-body{
  h1{
    font-size: 14px;
  }
  .mui-ellipsis{
    display: flex;
    justify-content: space-between;
    color:#226aff;
    font-size: 12px;
  }
}
</style>