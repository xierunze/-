<template lang="html">
  <div id="contents">
      <div class="titleOne">
          <h2>最世界商城</h2>
          <a>更多</a>
      </div>
      <div class="tables">
          <div class="tableOne">
            <a>
                <h3>自由行</h3>
                <p>机＋酒一次购</p>
            </a>
          </div>
          <div class="tableTwo">
            <a>
                <h3>特价机票</h3>
                <p>尾单特价 优质服务</p>
            </a>
          </div>
          <div class="tableThree">
            <a>
                <h3>签证</h3>
                <p>价格优惠 高通过率</p>
            </a>
          </div>
          <div class="tableFour">
            <a>
                <h3>城市玩乐</h3>
                <p>深度体验 CityWalk</p>
            </a>
          </div>
      </div>
      <ul class="indexList">
        <li>
          <a>
            <img src="../assets/images/14888690439619.jpg"/>
            <span>门票/票券</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/images/14888725998572.jpg"/>
            <span>当地游</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/images/14888772886732.jpg"/>
            <span>WiFi/电话卡</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/images/14888773849058.jpg"/>
            <span>交通票券</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/images/14888774385017.jpg"/>
            <span>当地参团</span>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/images/14888775556615.jpg"/>
            <span>接送机/包车</span>
          </a>
        </li>
      </ul>
      <section class="sections">
        <h2>精选折扣  每日更新</h2>
        <ul class="contentList">
          <li v-for="(item,index) in datas">
            <a>
              <img :src="item.img"/>
              <h3>{{item.data}}</h3>
              <p><em>1399</em>元起</p>
            </a>
          </li>
          <!--<li>
            <a>
              <img src="../assets/images/list2.jpg"/>
              <h3>
                【拒签退票】北京往返捷克布拉格/伊斯坦布尔/伦敦/巴黎/罗马/阿姆斯特丹6-30天含税机票(包含首晚酒店/可代办签证)
              </h3>
              <p><em>1399</em>元起</p>
            </a>
          </li>
           <li>
            <a>
              <img src="../assets/images/list3.jpg"/>
              <h3>[4月9日]皇家加勒比海洋水手号上海往返福冈过夜6天5晚邮轮之旅</h3>
              <p><em>1399</em>元起</p>
            </a>
          </li>
           <li>
            <a>
              <img src="../assets/images/list4.jpg"/>
              <h3>香港直飞毛里求斯7天5晚天自由行（赠送接送机+含早晚餐）</h3>
              <p><em>1399</em>元起</p>
            </a>
          </li>-->
        </ul>
      </section>
      <section class="takeAbout">
        <h2>游记与话题</h2>
        <ul class="takeList">
          <li v-for="(items,index) in isData">
            <img :src="items.img"/>
            <a>
              <p>{{items.data}}</p>
              <span>
                <img :src="items.head"/>
                穷游大秘书
              </span>
            </a>
          </li>        
        </ul>
        <ul class="takeList" v-show="ishow">
          <li v-for="(items,index) in isData">
            <img :src="items.img"/>
            <a>
              <p>{{items.data}}</p>
              <span>
                <img :src="items.head"/>
                穷游大秘书
              </span>
            </a>
          </li>        
        </ul>
        <button class="btnMone" @click="show">
          展开更多
        </button>
      </section>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        datas:{},
        isData:{},
         ishow:false
      }
    },
     methods:{
        show(){
          this.ishow=true;
        },
        hide(){
          this.ishow=false;
        }
      },
    created:function(){
      var url = "src/assets/mock/content.json";
      this.$http.get(url).then(function(data){
        console.log("请求数据成功");
        //console.log(data);
        this.datas = data.body.data1;
        this.isData = data.body.data2;
      },function(err){
        console.log(err);
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
