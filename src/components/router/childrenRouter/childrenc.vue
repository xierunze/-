<template lang="html">
  <div>
    <ul class="locals">
      <li v-for="(item,index) in datas">
        <router-link :to="{name:'country',params:{uid:index}}">
          <img :src="item.img"/>
        </router-link>       
        <b>{{item.title}}</b>  
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        datas:{}
      }
    },
    created:function(){
      var url = "src/assets/mock/content.json";
      this.$http.get(url).then(function(data){
        console.log("请求数据成功");
        //console.log(data);
        this.datas = data.body.data3;

      },function(err){
        console.log(err);
      })
    }
  }
</script>

<style lang="css">

</style>
