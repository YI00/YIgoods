<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time|dateFormat}}</span>
      <span>点击:{{newsinfo.click}}次</span>
    </p>

    <hr>

    <div class="content" v-html="newsinfo.content"></div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      id:this.$route.params.id,
      newsinfo:{}
    }
  },
  created(){
    this.getNewsInfo()
  },
  methods:{
    async getNewsInfo(){
      const res = await this.$axios.get('api/getnew/'+this.id)
      if(res.data.status==0){
        this.newsinfo = res.data.message[0]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.newsinfo-container{
  margin: 10px 4px 0 4px;
  text-align: center;
  .title{
    font-size: 16px;
    color: red;
  }
  .subtitle{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #226aff;
  }
}
</style>