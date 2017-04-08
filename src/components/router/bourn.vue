<template lang="html">
  <div class="hereBox">
      <div class="bom">
        <div class="searchOne">
          <router-link :to="{name:'main'}">
            <i class="iconfont">&#xe721;</i>
          </router-link> 
          <h2>目的地</h2>
          <button class="bournBtn" @click="show">
            搜索您想去的国家
          </button>
        </div>

        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
          <div id="searchBourn" v-show="ishow" class="animated">
            <div class="backTo">
              <span @click="hide" class="back">×</span>
              <div class="searchTwo">
                <input type="text" placeholder="搜索目的地"/>
              </div>
              <span id="">
                搜索
              </span>
            </div>
            <div class="btnBox">
              <div class="saveBox"></div>
              <div class="btnList">
                <p>热门搜索</p>
                <ul class="listMany">
                  <li>日本</li>
                  <li>韩国</li>
                  <li>泰国</li>
                  <li>三亚</li>
                  <li>巴厘岛</li>
                  <li>马尔代夫</li>
                  <li>塞班岛</li>
                  <li>台湾</li>
                  <li>厦门</li>
                  <li>美国</li>
                  <li>东京</li>
                </ul> 
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="goHereBox">
          <ul class="hereList">
            <li>
              <router-link :to="{name:'bourn.childrena'}">
                亚洲
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'bourn.childrenb'}">
                欧洲
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'bourn.childrenc'}">
                大洋洲
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'bourn.childrend'}">
                北美洲
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'bourn.childrene'}">
                非洲
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'bourn.childrenf'}">
                南美洲
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'bourn.childreng'}">
                南极洲
              </router-link>
            </li>
          </ul>
          <div class="localList">
            <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
        return{
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
      }
}
</script>

<style lang="scss">

</style>
