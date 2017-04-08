<template lang="html">
    <div class="boxMany">
        <div class="nameBox">
            <router-link :to="{name:'login.grandson1'}">
                账号登录
            </router-link>
            <router-link :to="{name:'login.grandson2'}">
                短信快捷登录
            </router-link>
        </div>
        <div class="loginCon">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="scss">

</style>