<template lang="html">
    <div class="loginBox">
        <div class="loginTop">
            <span >
                <router-link :to="{name:'main'}">
                    <i class="iconfont">&#xe721;</i>
                </router-link>          
            </span>
            <div class="loginOne">
                <router-link :to="{name:'loginRegister.login'}">
                    登录
                </router-link>
            </div>
            <div class="registerOne">
                <router-link :to="{name:'register'}">
                    注册
                </router-link>
            </div>                  
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        methods:{
            back(){
                window.history.go(-1);
            }
        }
    }
</script>

<style lang="scss">

</style>