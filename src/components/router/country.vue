<template lang="html">
  <div class="countryBox">
    <div class="countryListTop">
        <router-link :to="{name:'bourn'}">
            <i class="iconfont">&#xe721;</i>
        </router-link>
        <h3>{{datas.coun}}</h3>
    </div>
    <div class="countryList">
        <ul>
          <li v-for="(item,index) in (datas.list)">
              <div class="countryImg">
                  <img :src="item.img"> 
              </div>
              <div class="countryText">
                  <p>{{item.text}}</p>

              </div>
          </li>
        </ul>
    </div>
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
        var is = this.$route.params.uid;
        this.datas = data.body.data4[is];

      },function(err){
        console.log(err);
      })
    }
  }
</script>

<style lang="css">

</style>
