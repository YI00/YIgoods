<template>
  <div>
    <!-- 列表滑动区 -->
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id===0?'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
  <!-- 图片展示区 -->
    <ul>
      <li v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url">
      </li>
    </ul>
  </div>
  
  
</template>
<script>
// 1.导入 mui 的js文件
import mui from '../../lib/mui/js/mui.min.js'
// // 2.初始化滑动组件

export default {
  data(){
    return {
      cates:[],
      list:[]
    }
  },
  created(){
    this.getAllCategory(),
    this.getPhotoListByCateId(0)
  },
  mounted(){
    mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods:{
    async getAllCategory(){
      const res = await this.$axios.get('api/getimgcategory')
      if(res.data.status==0){
        res.data.message.unshift({title:'全部',id:0})
        this.cates = res.data.message
      }
    },
    async getPhotoListByCateId(cateId){
      const res = await this.$axios.get('api/getimages/'+cateId)
      if(res.data.status==0){
        this.list = res.data.message
      }
    }
  }
}
</script>
<style lang="scss" scoped>
*{
  touch-action: pan-y;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>