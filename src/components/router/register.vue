<template lang="html">
    <div>
       <div class="headerTop">
           <router-link :to="{name:'main'}">
                <i class="iconfont">&#xe721;</i>
            </router-link>
            <h3>注册</h3>          
       </div> 
       <div class="registerBox">
            <div class="phoneBox">
                <input type="text" placeholder="输入您的手机号码">
                <button>发送验证码</button>
            </div>
       </div>
       <div class="bix">
            <div class="numb">
                <input type="text" placeholder="请输入您收到的验证码">
            </div>
       </div>
       <div class="registerGo">
            <button>
                立即注册
            </button>
       </div>
       <p class="logo">
           2004-2017 © 穷游网™ qyer.com All rights reserved.
       </p>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="scss">

</style>