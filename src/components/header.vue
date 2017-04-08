<template lang="html">
  <header>
    <div id="box">
      <div class="isBox">
        <div class="head">
          <div class="headLeft" @click="show">
            <i class="iconfont">&#xe62f;</i>
          </div>
          <div class="searchBox">
            <div class="inputBox">
              <img src="../assets/images/search.png">
              <input type="text" placeholder="搜索目的地 / 游记攻略 / 问答">
            </div>
          </div>
          <div class="headRight">
            <router-link :to="{name:'loginRegister'}">
                <i class="iconfont">&#xe609;</i>
            </router-link>         
          </div>
        </div>
        <div class="swiper-container" id="images-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="#"><img src="../assets/images/bg1.jpg" alt=""></a>
            </div>
            <div class="swiper-slide">
              <a href="#"><img src="../assets/images/bg2.jpg" alt=""></a>
            </div>
            <div class="swiper-slide">
              <a href="#"><img src="../assets/images/bg3.jpg" alt=""></a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        
        <div class="eightRouter">
          <div class="routerBox">
            <ul>
              <li class="item1">
                <router-link :to="{name: 'bourn'}">
                  <i class="iconfont animated infinite bounce">&#xe603;</i>
                  <span>目的地</span>
                </router-link>
              </li>
              <li class="item2">
                <a>
                  <i class="iconfont">&#xe640;</i>
                  <span>行程</span>
                </a>
              </li>
              <li class="item3">
                <a>
                  <i class="iconfont">&#xe61d;</i>
                  <span>游记攻略</span>
                </a>
              </li>
              <li class="item4">
                <a>
                  <i class="iconfont">&#xe72b;</i>
                  <span>商城</span>
                </a>
              </li>
              <li class="item5">
                <a>
                  <i class="iconfont">&#xe681;</i>
                  <span>提问</span>
                </a>
              </li>
              <li class="item6">
                <a>
                  <i class="iconfont">&#xe611;</i>
                  <span>酒店</span>
                </a>
              </li>
              <li class="item7">
                <a>
                  <i class="iconfont">&#xe613;</i>
                  <span>会玩</span>
                </a>
              </li>
              <li class="item8">
                <a>
                  <i class="iconfont">&#xe653;</i>
                  <span>更多</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
        <div id="content" v-show="ishow" class="animated">
          <div class="back" >
            <span @click="hide">返回</span>
          </div>
          <ul class="sidebar">
            <li class="item1">
              <a>
                <i class="iconfont">&#xe61d;</i>
                目的地 
              </a>        
            </li>
            <li class="item2">
              <a>
               <i class="iconfont">&#xe61d;</i>
                形成助手
              </a>
               
            </li>
            <li class="item3">
              <a>
              <i class="iconfont">&#xe61d;</i>
              穷游锦囊
              </a>
            </li>
            <li class="item4">
              <a>
              <i class="iconfont">&#xe61d;</i>
              最世界
              </a>
            </li>
            <li class="item5">
              <a>
              <i class="iconfont">&#xe61d;</i>
              问答
              </a>
            </li>
            <li class="item6">
              <a>
              <i class="iconfont">&#xe61d;</i>
              论坛
              </a>
            </li>
            <li class="item7">
              <a>
              <i class="iconfont">&#xe61d;</i>
              穷游出品
              </a>
            </li>
            <li class="item8">
              <a>
              <i class="iconfont">&#xe61d;</i>
              酒店
              </a>
            </li>
            <li class="item9">
              <a>
              <i class="iconfont">&#xe61d;</i>
              机票
              </a>
            </li>
            <li class="item10">
              <a>
              <i class="iconfont">&#xe61d;</i>
              APP
              </a>
            </li>
            <li class="item11">
              <a>
              <i class="iconfont">&#xe61d;</i>
              点评
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </header>

</template>

<script>
export default {
  data() {
    return {
      ishow: false
    }
  },
  methods: {
    show() {
      this.ishow = true;
    },
    hide() {
      this.ishow = false;
    }
  }
}
window.onload=function(){
   var swiper = new Swiper('#images-swiper', {
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true, //按钮事件
            centeredSlides: true,
            autoplay: 3000,
            loop: true, //循环
            autoplayDisableOnInteraction: false //用户操作swiper后是否禁用autoplay

        });
}
              
</script>

<style lang="scss" scoped>
#images-swiper {
  width: 100%;
  .swiper-slide {
    width: 100%;
  }
  img {
    width: 100%;
  }
}
</style>